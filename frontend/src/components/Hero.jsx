import { useState, useEffect, useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react';

/* ── Per-character colour palette ──────────────────────────────────── */
const CHAR_COLORS = [
  'text-blue-500',
  'text-amber-500',
  'text-fuchsia-500',
  'text-emerald-500',
  'text-rose-500',
  'text-violet-500',
];

/* ── Tilt physics ──────────────────────────────────────────────────── */
const ROTATION_RANGE = 35;

const TRANSLATIONS = ['SINGH', 'सिंह', '싱', '辛格', 'シン'];

/* ── Hero ──────────────────────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 100, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 18 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const [translationIndex, setTranslationIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTranslationIndex((prev) => (prev + 1) % TRANSLATIONS.length);
        setVisible(true);
      }, 1000); // Time for fade-out to complete
    }, 4000); // Start next transition cycle every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rX = ((e.clientY - rect.top) / rect.height - 0.5) * -ROTATION_RANGE;
    const rY = ((e.clientX - rect.left) / rect.width - 0.5) * ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  /* Scroll parallax on the whole card */
  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('hero-card');
      if (el) {
        const scrolled = window.pageYOffset;
        el.style.transform = `translateY(${scrolled * 0.06}px)`;
        el.style.opacity = String(1 - scrolled / 500);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden px-4">

      {/* ── Diagonal tech tickers ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center" aria-hidden="true">
        <div
          className="absolute rotate-[-32deg] opacity-[0.11]"
          style={{ whiteSpace: 'nowrap', width: '220vw', left: '-40vw', top: '35%' }}
        >
          <div className="ticker-animation flex gap-8">
            {[...Array(2)].flatMap(() =>
              ['Vercel KV', 'SQL', 'Redis', 'MobX', 'Redux', 'React Query', 'Zustand', 'Next.js', 'Express.js', 'Node.js', 'Prisma', 'Socket.io', 'GitHub', 'NPM', 'Yarn', 'JavaScript']
            ).map((t, i) => (
              <span key={i} className="font-mono text-xs tracking-wider text-zinc-600">— {t}</span>
            ))}
          </div>
        </div>
        <div
          className="absolute rotate-[-32deg] opacity-[0.11]"
          style={{ whiteSpace: 'nowrap', width: '220vw', right: '-80vw', top: '55%' }}
        >
          <div className="ticker-animation flex gap-8" style={{ animationDirection: 'reverse' }}>
            {[...Array(2)].flatMap(() =>
              ['HTML', 'CSS', 'Java', 'C', 'Markdown', 'Lua', 'Next.js', 'MikroTik', 'GraphQL', 'Svelte', 'TypeScript', 'MongoDB', 'Firebase', 'Tailwind CSS']
            ).map((t, i) => (
              <span key={i} className="font-mono text-xs tracking-wider text-zinc-600">— {t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Centered Tilt Card ── */}
      <div id="hero-card" className="relative z-10">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transformStyle: 'preserve-3d', transform }}
          className="relative cursor-pointer select-none"
        >
          {/* Card shell */}
          <div
            className="
              relative
              w-[85vw] sm:w-30vw md:w-45vw lg:w-90vw h-[85vh]
              rounded-3xl
              bg-white
              shadow-[0_12px_80px_rgba(0,0,0,0.10)]
              border border-zinc-100
              flex flex-col items-center justify-center
              py-16 sm:py-20 md:py-28 lg:py-32
              px-2 gap-0
            "
            style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
          >
            {/* ── Name: ADITYA ── */}
            <p
              className="font-bold uppercase leading-none gap-2 flex flex-wrap justify-center text-zinc-900"
              style={{
                fontSize: 'clamp(4rem, 12vw, 8rem)',
                transform: 'translateZ(50px)',
                transformStyle: 'preserve-3d',
                fontFamily: "'Hanken Grotesk', sans-serif",
              }}
            >
              {'ADITYA'.split('').map((char, i) => (
                <span
                  key={i}
                  className={`hero-char relative transition-colors duration-200 hover:${CHAR_COLORS[i % CHAR_COLORS.length]}`}
                >
                  <span className="hero-char-indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 sm:w-6 sm:h-6 spin-delayed"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 20l7-12H5z" />
                    </svg>
                  </span>
                  {char}
                </span>
              ))}
            </p>

            {/* ── Name: SINGH (ghost) ── */}
            <p
              className="mt-2 font-bold uppercase leading-none tracking-tighter flex flex-wrap justify-center text-zinc-900 select-none pointer-events-none"
              style={{
                fontSize: 'clamp(4rem, 12vw, 8rem)',
                transform: 'translateZ(35px)',
                transformStyle: 'preserve-3d',
                fontFamily: "'Hanken Grotesk', sans-serif",
                opacity: visible ? 0.2 : 0,
                filter: visible ? 'blur(0px)' : 'blur(4px)',
                transition: 'opacity 1s ease-in-out, filter 1s ease-in-out',
              }}
            >
              {TRANSLATIONS[translationIndex]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
