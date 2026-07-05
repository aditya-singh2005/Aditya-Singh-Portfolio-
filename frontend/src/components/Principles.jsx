import { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';

const TOOLS = [
  { name: 'VS Code', icon: 'code', color: '#007ACC' },
  { name: 'React', icon: 'web', color: '#61DAFB' },
  { name: 'Node.js', icon: 'dns', color: '#339933' },
  { name: 'Python', icon: 'terminal', color: '#3776AB' },
  { name: 'Figma', icon: 'brush', color: '#F24E1E' },
  { name: 'Docker', icon: 'deployed_code', color: '#2496ED' },
];

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

export default function Principles() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="px-4 md:px-8 mb-24">
      <SectionHeading title="About Me" />

      <div className="ab-grid">

        {/* ── 1. HERO CARD ── */}
        <div className="ab-cell ab-hero">
          <div className="ab-hero-blob" />
          <div className="ab-hero-content">
            <div className="ab-avatar">
              <span className="ab-avatar-text">AS</span>
            </div>
            <h3 className="ab-hero-name">Aditya Singh</h3>
            <p className="ab-hero-role">Full Stack & ML Engineer</p>
            <p className="ab-hero-bio">
              Building real-world products, exploring Agentic AI, and turning complex problems into elegant solutions.
            </p>
            <div className="ab-hero-tags">
              <span className="ab-tag">Full Stack</span>
              <span className="ab-tag">AI / ML</span>
              <span className="ab-tag">Mobile</span>
            </div>
          </div>
        </div>

        {/* ── 2. HACKATHONS ── */}
        <div className="ab-cell ab-hackathons">
          <div className="ab-hack-deco" />
          <span className="ab-stat-label">Hackathons</span>
          <p className="ab-stat-number"><AnimatedCounter target={5} />+</p>
          <div className="ab-hack-names">
            <span>Flipkart Gridlock</span>
            <span>Redrob AI</span>
          </div>
        </div>

        {/* ── 3. STATUS (Merged Location & Availability) ── */}
        <div className="ab-cell ab-status">
          <div className="ab-status-loc">
            <p className="ab-loc-label">Based in</p>
            <p className="ab-loc-value">India 🇮🇳</p>
          </div>
          <div className="ab-status-div"></div>
          <div className="ab-status-avail">
            <p className="ab-avail-title">Open to Work</p>
            <div className="ab-avail-chips">
              <span className="ab-avail-chip">Full-time</span>
              <span className="ab-avail-chip">Remote</span>
            </div>
          </div>
        </div>

        {/* ── 4. EDUCATION ── */}
        <div className="ab-cell ab-edu">

          <div className="ab-edu-left">
            <span className="material-symbols-outlined ab-edu-icon">school</span>
            <div>
              <p className="ab-edu-degree">B.Tech : Computer Scince and Engineering</p>
              <p className="ab-edu-college">Delhi Technological University, Delhi</p>
            </div>
          </div>
          <div className="ab-edu-year-badge">
            <span className="ab-edu-year">2023</span>
            <span className="ab-edu-dash">—</span>
            <span className="ab-edu-year">2027</span>
          </div>
        </div>

        {/* ── 5. QUOTE ── */}
        <div className="ab-cell ab-quote">
          <span className="ab-quote-icon">"</span>
          <p className="ab-quote-text">First, solve the problem.<br />Then, write the code.</p>
          <p className="ab-quote-author">— John Johnson</p>
        </div>

        {/* ── 6. COFFEE ── */}
        <div className="ab-cell ab-coffee">
          <span className="ab-coffee-emoji">☕</span>
          <div className="ab-coffee-text">
            <span className="ab-coffee-label">Fueled by Coffee</span>
            <span className="ab-coffee-desc">Turning caffeine into debugged code.</span>
          </div>
        </div>

        {/* ── 7. MUSIC ── */}
        <div className="ab-cell ab-music" onClick={() => setPlaying(p => !p)}>
          <div className="ab-music-top">
            <span className="ab-music-note">🎵</span>
            <div className={`ab-music-bars${playing ? ' ab-bars-active' : ''}`}>
              {[1,2,3,4,5].map(i => (
                <span key={i} className="ab-bar" style={{ '--i': i }} />
              ))}
            </div>
          </div>
          <p className="ab-music-title">Lo-fi Coding</p>
          <p className="ab-music-sub">Study Vibes</p>
          <button
            className="ab-music-play"
            onClick={e => { e.stopPropagation(); setPlaying(p => !p); }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
              {playing ? 'pause' : 'play_arrow'}
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
