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
    <section className="relative flex flex-col items-center overflow-hidden px-4" style={{ minHeight: '100vh', marginTop: '-4rem', paddingTop: '4rem', justifyContent: 'center' }}>

      {/* ── Ambient gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute rounded-full"
          style={{ width: 560, height: 560, left: '5%', top: '10%', background: 'radial-gradient(circle, #6366f155 0%, transparent 70%)', filter: 'blur(72px)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ width: 420, height: 420, right: '5%', top: '55%', background: 'radial-gradient(circle, #a855f755 0%, transparent 70%)', filter: 'blur(72px)' }}
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, delay: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ width: 320, height: 320, right: '20%', top: '5%', background: 'radial-gradient(circle, #06b6d445 0%, transparent 70%)', filter: 'blur(60px)' }}
          animate={{ scale: [1, 1.12, 1], x: [0, 15, -10, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 16, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
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
              w-[100vw] sm:w-30vw md:w-45vw lg:w-90vw h-[85vh]
              rounded-3xl
              bg-transparent
              flex flex-col items-center justify-center
              py-16 sm:py-20 md:py-28 lg:py-32
              px-2 gap-0
            "
            style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
          >
            {/* ── Name: ADITYA ── */}
            <p
              className="font-bold uppercase leading-none hero-name-p"
              style={{
                fontSize: 'clamp(4rem, 12vw, 8rem)',
                transform: 'translateZ(50px)',
                transformStyle: 'preserve-3d',
                fontFamily: "'Hanken Grotesk', sans-serif",
              }}
            >
              <span className="hero-name-gradient">ADITYA</span>
            </p>

            {/* ── Name: SINGH (ghost) ── */}
            <p
              className="mt-3 font-bold uppercase leading-none tracking-tighter hover:tracking-[0.15em] transition-all duration-800 ease-out flex flex-wrap justify-center text-zinc-900 select-none pointer-events-auto"
              style={{
                fontSize: 'clamp(4rem, 12vw, 8rem)',
                transform: 'translateZ(35px)',
                transformStyle: 'preserve-3d',
                fontFamily: "'Hanken Grotesk', sans-serif",
                opacity: visible ? 0.3 : 0,
                filter: visible ? 'blur(0px)' : 'blur(4px)',
                transition: 'opacity 1s ease-in-out, filter 1s ease-in-out, letter-spacing 0.5s ease-out',
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
