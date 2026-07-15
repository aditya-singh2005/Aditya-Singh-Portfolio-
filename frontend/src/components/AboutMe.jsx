import { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 35);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}{suffix}</span>;
}

export default function AboutMe() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="px-4 md:px-8 mb-24 max-w-5xl mx-auto">
      <SectionHeading title="About Me" />

      <div className="mt-8 grid grid-cols-4 auto-rows-32.5 gap-4">

        {/* ── 1. HERO CARD (2x2) ── */}
        <div className="group relative col-span-4 cursor-pointer row-span-2 overflow-hidden rounded-2xl bg-linear-to-br from-violet-600 via-indigo-600 to-blue-600 p-6 shadow-sm transition-transform duration-300 ease-out will-change-transform hover:z-20 hover:-translate-y-1 hover:scale-[1.025] hover:shadow-[0_18px_36px_-12px_rgba(15,23,42,0.22)] sm:col-span-2">
          <div className="pointer-events-none absolute -top-14 -right-14 h-48 w-48 rounded-full bg-white/10 blur-3xl transition-all duration-700 ease-out group-hover:scale-125 group-hover:rotate-45" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-black/10 blur-2xl transition-all duration-700 ease-out group-hover:scale-110" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-sm font-bold text-white ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-3">
              AS
            </div>

            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">Aditya Singh</h3>
              <p className="mt-0.5 text-xs font-medium text-indigo-100">Full Stack &amp; ML Engineer</p>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-indigo-100/80">
                Building real-world products, exploring Agentic AI, and turning complex problems into elegant solutions.
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {['Full Stack', 'AI / ML', 'Mobile'].map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. OPEN TO WORK (square, light) ── */}
        <div className="group relative col-span-2 sm:col-span-1 row-span-1 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition-transform duration-300 ease-out will-change-transform hover:z-20 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_36px_-12px_rgba(15,23,42,0.16)] hover:ring-emerald-200 cursor-pointer">
          <div className="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full bg-emerald-50 transition-all duration-700 ease-out group-hover:scale-125" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 w-fit">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">Open to work</span>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">India · Remote</p>
              <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
                Flexible to relocate, full-time roles
              </p>
            </div>
          </div>
        </div>

        {/* ── 3. HACKATHONS (square) ── */}
        <div className="group relative col-span-2 sm:col-span-1 row-span-1 overflow-hidden rounded-2xl bg-slate-900 p-4 shadow-sm transition-transform duration-300 ease-out will-change-transform hover:z-20 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_36px_-12px_rgba(15,23,42,0.22)] cursor-pointer">
          <div className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-blue-500/20 blur-2xl transition-all duration-700 ease-out group-hover:scale-125" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Hackathons</span>
            <div>
              <p className="text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                <AnimatedCounter target={5} />+
              </p>
              <p className="mt-0.5 text-[11px] text-slate-400 transition-colors duration-300 group-hover:text-blue-400">
                Flipkart Gridlock, Redrob AI
              </p>
            </div>
          </div>
        </div>

        {/* ── 4. QUOTE (wide rect) ── */}
        <div className="group relative col-span-4 flex cursor-pointer items-center row-span-1 overflow-hidden rounded-2xl border border-white/5 bg-linear-to-br from-slate-900 via-slate-900 to-indigo-950 p-5 shadow-sm transition-transform duration-300 ease-out will-change-transform hover:z-20 hover:-translate-y-1 hover:scale-[1.025] hover:border-indigo-400/30 hover:shadow-[0_18px_36px_-12px_rgba(15,23,42,0.24)] sm:col-span-2">
          <div className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-indigo-500/20 blur-3xl transition-all duration-700 ease-out group-hover:scale-125" />
          <div className="relative z-10">
            <p className="text-xs font-medium leading-snug text-slate-100">
              <span className="mr-1 font-serif text-lg text-indigo-400/70">&ldquo;</span>
              First, solve the problem. Then, write the code.
            </p>
            <p className="mt-1.5 text-[11px] tracking-wide text-slate-400">— John Johnson</p>
          </div>
        </div>

        {/* ── 5. EDUCATION (wide rect) ── */}
        <div className="group relative col-span-4 sm:col-span-2 row-span-1 flex items-center justify-between overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-transform duration-300 ease-out will-change-transform hover:z-20 hover:-translate-y-1 hover:scale-[1.025] hover:shadow-[0_18px_36px_-12px_rgba(15,23,42,0.16)] cursor-pointer">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110">
              🎓
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-900">B.Tech: Computer Science &amp; Engineering</p>
              <p className="text-[11px] text-slate-500">Delhi Technological University, Delhi</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition-transform duration-300 group-hover:scale-105">
            <span>2023</span>
            <span className="text-slate-400">—</span>
            <span>2027</span>
          </div>
        </div>

        {/* ── 6. COFFEE (square, light redesign, no emoji) ── */}
        <div className="group relative col-span-2 sm:col-span-1 row-span-1 overflow-hidden rounded-2xl bg-amber-50 p-4 shadow-sm ring-1 ring-amber-100 transition-transform duration-300 ease-out will-change-transform hover:z-20 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_36px_-12px_rgba(15,23,42,0.16)] hover:ring-amber-200 cursor-pointer">
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-amber-100 transition-all duration-700 ease-out group-hover:scale-125" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-amber-100 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-3">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" />
                <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
                <path d="M8 4c0 .7-.5 1-.5 1.7S8 7 8 7" />
                <path d="M12 4c0 .7-.5 1-.5 1.7S12 7 12 7" />
              </svg>
            </div>

            <div>
              <p className="text-sm font-semibold text-amber-900">Fueled by coffee</p>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-amber-200/60">
                <div className="h-full w-2/3 rounded-full bg-amber-500 transition-all duration-500 ease-out group-hover:w-[85%]" />
              </div>
            </div>
          </div>
        </div>

        {/* ── 7. MUSIC (square) ── */}
        <div
          className="group relative col-span-2 row-span-1 cursor-pointer overflow-hidden rounded-2xl bg-linear-to-br from-fuchsia-600 to-pink-600 p-4 shadow-sm transition-transform duration-300 ease-out will-change-transform hover:z-20 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_18px_36px_-12px_rgba(15,23,42,0.2)] sm:col-span-1"
        >
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex h-5 items-end gap-0.5">
              {[0, 1, 2, 3, 4].map(i => (
                <span
                  key={i}
                  className={`w-1 rounded-full bg-white/80 transition-all duration-300 ${playing ? 'animate-bounce' : 'h-1.5'
                    }`}
                  style={
                    playing
                      ? { height: '100%', animationDelay: `${i * 0.12}s`, animationDuration: '0.9s' }
                      : undefined
                  }
                />
              ))}
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Lo-fi Coding</p>
                <p className="text-[11px] text-white/70">Study Vibes</p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setPlaying(p => !p); }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
                  {playing ? 'pause' : 'play_arrow'}
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}