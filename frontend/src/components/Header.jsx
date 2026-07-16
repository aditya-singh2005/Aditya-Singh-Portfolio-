import { useEffect, useState } from "react";
import githubIcon from "../assets/github.svg"
import linkedinIcon from "../assets/linkedin.svg"
import leetcodeIcon from "../assets/leetcode.svg"

/* ── Social icon links ─────────────────────────────────────────────── */
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/aditya-singh2005",
    icon: githubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-singh-7658a1291/",
    icon: linkedinIcon,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Aditya_Singh2685/",
    icon: leetcodeIcon,
  },
];

/* ── Clock hook ────────────────────────────────────────────────────── */
function useLiveClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

/* ── Helpers ───────────────────────────────────────────────────────── */
function pad(n) {
  return String(n).padStart(2, "0");
}
function formatTime(date) {
  let h = date.getHours();
  const m = pad(date.getMinutes());
  const ampm = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  return { h: pad(h), m, ampm };
}
function formatDate(date) {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

/* ── Component ─────────────────────────────────────────────────────── */
export default function Header() {
  const now = useLiveClock();
  const { h, m, ampm } = formatTime(now);
  const dateStr = formatDate(now);

  return (
    <header
      className="
        relative z-50
        w-full
        bg-transparent
        flex justify-between items-center
        px-4 sm:px-8
        h-16
      "
    >
      {/* ── Left: greeting ── */}
      <div className="flex items-center gap-2 select-none h-full">
        <span
          className="text-xl leading-none flex items-center"
          style={{ display: "inline-block", animation: "wave 2.4s ease-in-out infinite" }}
          aria-hidden="true"
        >
          👋
        </span>
        <span
          className="font-bold text-sm sm:text-base tracking-tight flex items-center"
          style={{ color: "#D4A017", fontFamily: "'Hanken Grotesk', sans-serif" }}
        >
          Hello!
        </span>
      </div>

      {/* ── Right: socials + clock ── */}
      <div className="flex items-center gap-3 xs:gap-3 sm:gap-5 h-full">
        {/* Social icons — scaled down on mobile, fully visible */}
        <nav className="flex items-center gap-4 xs:gap-3 h-full" aria-label="Social links">
          {SOCIALS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 transition-colors duration-300"
            >
              <img
                src={icon}
                alt={label}
                className="w-5 h-5 object-contain transition-transform duration-400 hover:scale-110"
              />
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-4 w-px bg-zinc-600 self-center" aria-hidden="true" />

        {/* Clock + date */}
        <div className="flex items-center gap-1 sm:gap-1.5 tabular-nums select-none h-full">
          <span
            className="text-md sm:text-lg md:text-xl font-bold tracking-tight leading-none text-zinc-800 flex items-center"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {h}:{m}
          </span>
          <div className="flex flex-col justify-center leading-none">
            <span
              className="text-[0.5rem] sm:text-[9px] font-bold text-black/80 leading-none mb-0.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {ampm}
            </span>
            <span
              className="text-[7px] sm:text-[8px] md:text-[9px] font-bold text-black/80 whitespace-nowrap leading-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {dateStr}
            </span>
          </div>
        </div>
      </div>

      {/* Wave keyframe */}
      <style>{`
        @keyframes wave {
          0%   { transform: rotate(0deg); }
          15%  { transform: rotate(14deg); }
          30%  { transform: rotate(-8deg); }
          40%  { transform: rotate(14deg); }
          50%  { transform: rotate(-4deg); }
          60%  { transform: rotate(10deg); }
          70%  { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </header>
  );
}
