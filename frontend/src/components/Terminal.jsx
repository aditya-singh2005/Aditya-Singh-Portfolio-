import { useEffect, useMemo, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://aditya-singh-portfolio-production.up.railway.app';

const initialLines = [
  {
    role: 'system',
    text: 'Last login: Sun Sep 14 12:00:49 on console',
  },
  {
    role: 'assistant',
    text: 'Welcome to Aditya Singh\'s portfolio terminal. Ask about projects, experience, skills, or how to get in touch.',
  },
];

function TypewriterMessage({ text, instant, onComplete }) {
  const [displayedText, setDisplayedText] = useState(instant ? text : '');
  const [isDone, setIsDone] = useState(instant);
  
  useEffect(() => {
    if (instant) {
      setDisplayedText(text);
      setIsDone(true);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsDone(true);
        if (onComplete) onComplete();
      }
    }, 20); // typing speed
    return () => clearInterval(interval);
  }, [text, instant, onComplete]);

  return (
    <span>
      {displayedText}
      {!isDone && <span className="inline-block w-2 h-4 ml-1 bg-white/80 animate-pulse align-middle" />}
    </span>
  );
}

export default function Terminal() {
  const [lines, setLines] = useState(initialLines);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const sessionKey = useMemo(() => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }

    return `portfolio-terminal-${Date.now()}`;
  }, []);

  useEffect(() => {
    setSessionId(sessionKey);
  }, [sessionKey]);

  useEffect(() => {
    if (!sessionId) {
      return;
    }

    const clearSession = async () => {
      try {
        await fetch(`${API_BASE_URL}/api/chat/clear`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            session_id: sessionId,
            message: '',
          }),
        });
      } catch (error) {
        console.warn('Could not clear terminal session memory', error);
      }
    };

    void clearSession();
  }, [sessionId]);



  const clearTerminal = async () => {
    setLines(initialLines);
    setInputValue('');

    if (!sessionId) {
      return;
    }

    try {
      await fetch(`${API_BASE_URL}/api/chat/clear`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          message: '',
        }),
      });
    } catch (error) {
      console.warn('Could not clear terminal session memory', error);
    }
  };

  const handleSubmit = async (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    event.preventDefault();

    const command = inputValue.trim();
    if (!command || isLoading || isTyping || !sessionId) {
      return;
    }

    setLines((currentLines) => [
      ...currentLines,
      { role: 'user', text: command },
      { role: 'assistant', text: 'Thinking…', pending: true },
    ]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          message: command,
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      const payload = contentType.includes('application/json')
        ? await response.json()
        : { detail: await response.text() };

      if (!response.ok) {
        throw new Error(payload?.detail || 'The assistant could not answer right now.');
      }

      setLines((currentLines) => {
        const nextLines = [...currentLines];
        nextLines.pop();
        nextLines.push({ role: 'assistant', text: payload?.response || 'No response returned.', isNew: true });
        return nextLines;
      });
      setIsTyping(true);
    } catch (error) {
      setLines((currentLines) => {
        const nextLines = [...currentLines];
        nextLines.pop();
        nextLines.push({ role: 'assistant', text: error.message || 'Something went wrong.', isNew: true });
        return nextLines;
      });
      setIsTyping(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-margin-mobile mb-24 max-w-4xl mx-auto">
      <SectionHeading title="Ask Me Anything" />
      <div className="bg-terminal-bg rounded-xl overflow-hidden shadow-2xl border border-white/5 mt-8">
        <div className="bg-[#323232] px-4 py-2 flex items-center justify-between gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <span className="font-terminal-text text-terminal-text text-white/50 text-xs">terminal — bash</span>
          <button
            type="button"
            onClick={clearTerminal}
            className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
          >
            clear
          </button>
        </div>

        <div className="relative">
          <div ref={containerRef} className="p-6 font-terminal-text text-terminal-text text-white/90 space-y-3 h-[45vh] overflow-y-auto">
            {lines.map((line, index) => {
            if (line.role === 'system') {
              return (
                <p key={`${line.role}-${index}`} className="text-white/40">
                  {line.text}
                </p>
              );
            }

            if (line.role === 'user') {
              return (
                <div key={`${line.role}-${index}`} className="space-y-1">
                  <p>
                    <span className="text-terminal-green">visitor@portfolio:</span>
                    <span className="text-primary-fixed-dim">~</span>$ {line.text}
                  </p>
                </div>
              );
            }

            return (
              <p key={`${line.role}-${index}`} className={`whitespace-pre-wrap wrap-break-word ${line.pending ? 'text-secondary-fixed-dim' : 'text-white/80'}`}>
                <span className="text-terminal-green">assistant@portfolio:</span>
                <span className="text-primary-fixed-dim">~</span>$ {
                  line.pending ? line.text : (
                    <TypewriterMessage 
                      text={line.text} 
                      instant={!line.isNew} 
                      onComplete={() => {
                        setIsTyping(false);
                        setLines((currentLines) => currentLines.map((l, i) => i === index ? { ...l, isNew: false } : l));
                      }} 
                    />
                  )
                }
              </p>
            );
          })}

          <div className="flex items-start gap-2">
            <span className="text-terminal-green">visitor@portfolio:</span>
            <span className="text-primary-fixed-dim">~</span>$
            <input
              ref={inputRef}
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleSubmit}
              disabled={isLoading || isTyping}
              placeholder={isLoading || isTyping ? 'Thinking…' : 'Ask about Aditya Singh…'}
              className="flex-1 bg-transparent outline-none text-white/90 placeholder:text-white/30 disabled:cursor-wait"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>
        
        <button
          onClick={scrollToBottom}
          className="absolute bottom-6 right-6 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-all z-10 group"
          title="Scroll to bottom"
        >
          <span className="material-symbols-outlined text-lg group-hover:translate-y-0.5 transition-transform">arrow_downward</span>
        </button>
      </div>
      </div>
    </section>
  );
}
