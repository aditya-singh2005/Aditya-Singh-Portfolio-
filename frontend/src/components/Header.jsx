import { useEffect, useState } from "react";

/* ── Social icon links ─────────────────────────────────────────────── */
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/aditya-singh2005",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-singh-7658a1291/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Aditya_Singh2685/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l5.706-6.105c.54-.577.51-1.482-.068-2.023A1.377 1.377 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
      </svg>
    ),
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
              className="text-black/85 hover:text-zinc-700 transition-colors duration-200 flex items-center [&>svg]:w-5 [&>svg]:h-5 xs:[&>svg]:w-[8px] xs:[&>svg]:h-[8px]"
            >
              {icon}
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
