import { useEffect, useMemo, useRef, useState } from 'react';

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

export default function Terminal() {
  const [lines, setLines] = useState(initialLines);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const inputRef = useRef(null);

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

  useEffect(() => {
    inputRef.current?.focus();
  }, [isLoading, lines.length]);

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
    if (!command || isLoading || !sessionId) {
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
        nextLines.push({ role: 'assistant', text: payload?.response || 'No response returned.' });
        return nextLines;
      });
    } catch (error) {
      setLines((currentLines) => {
        const nextLines = [...currentLines];
        nextLines.pop();
        nextLines.push({ role: 'assistant', text: error.message || 'Something went wrong.' });
        return nextLines;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-margin-mobile mb-24 max-w-4xl mx-auto">
      <div className="bg-terminal-bg rounded-xl overflow-hidden shadow-2xl border border-white/5">
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

        <div className="p-6 font-terminal-text text-terminal-text text-white/90 space-y-3 h-[45vh] overflow-y-auto">
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
                <span className="text-primary-fixed-dim">~</span>$ {line.text}
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
              disabled={isLoading}
              placeholder={isLoading ? 'Thinking…' : 'Ask about Aditya Singh…'}
              className="flex-1 bg-transparent outline-none text-white/90 placeholder:text-white/30 disabled:cursor-wait"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
