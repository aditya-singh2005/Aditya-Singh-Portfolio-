import { useEffect, useState } from "react";

/* ── Social icon links ─────────────────────────────────────────────── */
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[19px] h-[19px]">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[19px] h-[19px]">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
              className="text-zinc-400 hover:text-zinc-700 transition-colors duration-200 flex items-center [&>svg]:w-5 [&>svg]:h-5 xs:[&>svg]:w-[8px] xs:[&>svg]:h-[8px]"
            >
              {icon}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-4 w-px bg-zinc-300 self-center" aria-hidden="true" />

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
              className="text-[0.5rem] sm:text-[9px] font-semibold text-zinc-500 leading-none mb-0.5"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {ampm}
            </span>
            <span
              className="text-[7px] sm:text-[8px] md:text-[9px] text-zinc-400 whitespace-nowrap leading-none"
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
