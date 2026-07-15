import { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    id: 1,
    role: 'CONSULTANT INTERN',
    company: 'Delhi Police Public Library',
    companyLink: '#',
    date: 'July – Aug 2025',
    bgImage: '/card5.png',
    logoImage: '/delhi_police.png',
    accentColor: '#818cf8',
    points: [
      'Assessed existing digital infrastructure and software workflows, identifying usability gaps and recommending concrete improvements through structured UI/UX evaluation.',
      'Leveraged data-driven analysis to support research initiatives under the Shikhar Organisation, improving community digital engagement outcomes.',
    ],
    certificate: 'https://drive.google.com/file/d/1GoLtAJSNeRiwqoYzaJ3Z3sM1Bm0Rjom_/view',
  },
  {
    id: 2,
    role: 'INTERN',
    company: 'Vrikshit Foundation',
    companyLink: '#',
    date: 'July 2024 – Aug 2024',
    bgImage: '/card2.png',
    logoImage: '/v1.png',
    accentColor: '#34d399',
    points: [
      'Contributed to community welfare by planting 50+ trees and organizing outreach data, increasing participation by 30%.',
    ],
    certificate: 'https://drive.google.com/file/d/1pY26GfjZyd9bhkb2gtBHl--J9aZb-DK3/view',
  }
];

const CHIP_W_CSS = 'clamp(24px, 3.28vw, 52px)';
const CHIP_H_CSS = 'clamp(17.5px, 2.4vw, 38px)';
const CHIP_RADIUS_CSS = 'clamp(4px, 0.51vw, 8px)';
const CHIP_INSET_CSS = 'clamp(11px, 1.5vw, 24px)';
const CARD_CLASS = 'w-[90vw] max-w-[475px] sm:w-[85vw] md:w-[70vw] lg:w-[475px] aspect-[1.586/1]';

function Chip() {
  return (
    <svg
      viewBox="0 0 52 38"
      fill="none"
      style={{
        width: CHIP_W_CSS,
        height: CHIP_H_CSS,
        display: 'block',
      }}
    >
      <rect
        x=".5"
        y=".5"
        width="51"
        height="37"
        rx="8"
        fill="url(#cg)"
        stroke="url(#cs)"
        strokeWidth="1"
      />
      <line x1="0" y1="12.5" x2="52" y2="12.5" stroke="url(#cs)" strokeWidth=".7" opacity=".7"/>
      <line x1="0" y1="25.5" x2="52" y2="25.5" stroke="url(#cs)" strokeWidth=".7" opacity=".7"/>
      <line x1="16.5" y1="0" x2="16.5" y2="38" stroke="url(#cs)" strokeWidth=".7" opacity=".7"/>
      <line x1="35.5" y1="0" x2="35.5" y2="38" stroke="url(#cs)" strokeWidth=".7" opacity=".7"/>
      <rect x="16.5" y="12.5" width="18.5" height="13" rx="1.2" fill="url(#cd)" stroke="url(#cs)" strokeWidth=".5"/>
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="52" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e8c76a"/>
          <stop offset="40%" stopColor="#f5dfa0"/>
          <stop offset="70%" stopColor="#c8973a"/>
          <stop offset="100%" stopColor="#a07828"/>
        </linearGradient>
        <linearGradient id="cd" x1="16.5" y1="12.5" x2="35" y2="25.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c8973a"/>
          <stop offset="100%" stopColor="#8a6020"/>
        </linearGradient>
        <linearGradient id="cs" x1="0" y1="0" x2="52" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f5dfa0" stopOpacity=".95"/>
          <stop offset="100%" stopColor="#8a6020" stopOpacity=".7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

const SOFT_SHADOW =
  '0 20px 45px -15px rgba(0,0,0,0.35), 0 8px 20px -10px rgba(0,0,0,0.25)';

function ExperienceCard({ exp, isActive }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (!isActive) return;
    setFlipped((f) => !f);
  };

  return (
    <div
      className={`relative shrink-0 select-none transition-all duration-500 ease-out ${CARD_CLASS}`}
      style={{
        perspective: '1600px',
        cursor: isActive ? 'pointer' : 'default',
        opacity: isActive ? 1 : 0.35,
        transform: isActive ? 'scale(1)' : 'scale(0.84)',
        filter: isActive ? 'blur(0px)' : 'blur(1px)',
      }}
      data-experience-card
      onClick={handleClick}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[1.75rem] overflow-hidden ring-1 ring-white/10"
          style={{ backfaceVisibility: 'hidden', boxShadow: SOFT_SHADOW }}
        >
          <img
            src={exp.bgImage}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

          <div
            className="absolute z-10"
            style={{ top: CHIP_INSET_CSS, left: CHIP_INSET_CSS }}
          >
            <Chip />
          </div>

          <div
            className="relative z-10 flex h-full flex-col"
            style={{ padding: 'clamp(0.9rem, 2.2vw, 1.5rem)' }}
          >
            <div className="flex items-start justify-end">
              <div
                className="rounded-full overflow-hidden ring-2 ring-white/40 bg-white/10 shrink-0"
                style={{ width: 'clamp(2.1rem, 3.2vw, 3rem)', height: 'clamp(2.1rem, 3.2vw, 3rem)' }}
              >
                <img src={exp.logoImage} alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center text-center px-2">
              <h4
                className="text-white font-extrabold uppercase tracking-wider leading-tight drop-shadow-md"
                style={{ fontSize: 'clamp(1rem, 2.4vw, 1.9rem)' }}
              >
                {exp.role.split(' ').map((w, i) => (
                  <span key={i} className="block">{w}</span>
                ))}
              </h4>
            </div>

            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <p
                  className="uppercase tracking-widest text-white/50"
                  style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}
                >
                  Company Name
                </p>
                <p
                  className="font-semibold text-white truncate"
                  style={{ fontSize: 'clamp(0.68rem, 1vw, 0.875rem)', maxWidth: 'clamp(120px, 20vw, 220px)' }}
                >
                  {exp.company}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p
                  className="uppercase tracking-widest text-white/50"
                  style={{ fontSize: 'clamp(0.5rem, 0.7vw, 0.625rem)' }}
                >
                  Tenure
                </p>
                <p
                  className="font-mono text-white whitespace-nowrap"
                  style={{ fontSize: 'clamp(0.68rem, 1vw, 0.875rem)' }}
                >
                  {exp.date}
                </p>
              </div>
            </div>
          </div>

          {isActive && (
            <div
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-white/60 z-10"
              style={{ top: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.6rem, 0.8vw, 0.75rem)' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '0.9em' }}>touch_app</span>
              Tap for details
            </div>
          )}
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[1.75rem] overflow-hidden bg-[#15161c] ring-1 ring-white/10"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', boxShadow: SOFT_SHADOW }}
        >
          <div style={{ height: 'clamp(0.35rem, 0.5vw, 0.5rem)' }} className="w-full">
            <div className="w-full h-full" style={{ background: exp.accentColor }} />
          </div>

          <div
            className="flex flex-col"
            style={{ padding: 'clamp(0.9rem, 2.2vw, 1.5rem)', height: 'calc(100% - 8px)' }}
          >
            <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
              <div className="min-w-0">
                <p
                  className="uppercase tracking-widest text-white/40"
                  style={{ fontSize: 'clamp(0.55rem, 0.75vw, 0.688rem)' }}
                >
                  Role
                </p>
                <h5
                  className="text-white font-bold leading-tight mt-0.5 truncate"
                  style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1.125rem)' }}
                >
                  {exp.role}
                </h5>
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-1 inline-flex items-center gap-1 underline underline-offset-2 font-semibold"
                  style={{ color: exp.accentColor, fontSize: 'clamp(0.68rem, 1vw, 0.875rem)' }}
                >
                  {exp.company}
                  <span className="material-symbols-outlined" style={{ fontSize: '0.85em' }}>open_in_new</span>
                </a>
              </div>
              <span
                className="shrink-0 font-mono text-slate-300 bg-white/10 rounded-full border border-white/15 whitespace-nowrap"
                style={{
                  fontSize: 'clamp(0.6rem, 0.85vw, 0.75rem)',
                  padding: 'clamp(0.25rem, 0.5vw, 0.375rem) clamp(0.5rem, 1vw, 0.75rem)',
                }}
              >
                {exp.date}
              </span>
            </div>

            <ul
              className="flex-1 overflow-y-auto pr-1 text-slate-200 leading-relaxed flex flex-col"
              style={{ fontSize: 'clamp(0.68rem, 1vw, 0.875rem)', rowGap: 'clamp(0.5rem, 1vw, 0.75rem)' }}
            >
              {exp.points.map((pt, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className="rounded-full shrink-0"
                    style={{ marginTop: '0.4em', width: '0.35em', height: '0.35em', background: exp.accentColor }}
                  />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <a
              href={exp.certificate}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-1.5 border rounded-full font-semibold"
              style={{
                marginTop: 'clamp(0.5rem, 1vw, 0.75rem)',
                paddingBlock: 'clamp(0.35rem, 0.7vw, 0.625rem)',
                fontSize: 'clamp(0.68rem, 1vw, 0.875rem)',
                borderColor: exp.accentColor,
                color: exp.accentColor,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '0.95em' }}>verified</span>
              View Certificate
            </a>
          </div>

          <div
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-white/60"
            style={{ bottom: 'clamp(0.5rem, 1vw, 0.75rem)', fontSize: 'clamp(0.6rem, 0.8vw, 0.75rem)' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '0.9em' }}>touch_app</span>
            Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const clipRef = useRef(null);
  const activeIdxRef = useRef(0);
  const [activeIdx, setActiveIdx] = useState(0);

  const N = experiences.length;

  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [gapPx, setGapPx] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const clip = clipRef.current;
    if (!section || !track || !clip) return;

    const measureCard = () => {
      const firstCard = track.querySelector('[data-experience-card]');
      if (!firstCard) return;

      const width = firstCard.getBoundingClientRect().width;
      const computedGap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0');
      setCardWidth(width);
      setCardHeight(Math.round(width / 1.586));
      setGapPx(computedGap || 0);
    };

    const applyTransform = (idx) => {
      if (!cardWidth) return;

      const step = cardWidth + gapPx;
      const clipCenter = clip.offsetWidth / 2;
      const cardCenter = idx * step + cardWidth / 2;
      const offset = clipCenter - cardCenter;
      track.style.transform = `translateX(${offset}px)`;
    };

    const handleResize = () => {
      measureCard();
      onScroll();
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.max(0, Math.min(1, -rect.top / scrollable)) : 0;

      const idx = Math.min(N - 1, Math.max(0, Math.round(progress * (N - 1))));

      if (idx !== activeIdxRef.current) {
        activeIdxRef.current = idx;
        setActiveIdx(idx);
      }
      applyTransform(activeIdxRef.current);
    };

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => {
          measureCard();
          onScroll();
        })
      : null;

    if (resizeObserver) {
      resizeObserver.observe(track);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    measureCard();
    onScroll();

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [N, cardWidth, gapPx]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${N * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <SectionHeading title="Experience" />

        

        <div
          ref={clipRef}
          className="relative overflow-visible w-full max-w-[1400px]"
          style={{
            marginTop: 'clamp(0.5rem, 1.5vw, 1.25rem)',
            height: cardHeight ? `calc(${cardHeight}px + 2.5rem)` : 'auto',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
        >
          <div
            ref={trackRef}
            className="
              flex items-center absolute top-0 left-0 h-full
              gap-6
              md:gap-10
              lg:gap-16
              xl:gap-45
            "
            style={{
              width: 'max-content',
              transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} isActive={i === activeIdx} />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2" style={{ marginTop: 'clamp(0.6rem, 1.5vw, 1rem)' }}>
          {experiences.map((_, i) => (
            <span
              key={i}
              className="rounded-full bg-white transition-all duration-300"
              style={{
                width: 'clamp(6px, 0.7vw, 8px)',
                height: 'clamp(6px, 0.7vw, 8px)',
                opacity: i === activeIdx ? 1 : 0.3,
                transform: i === activeIdx ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}