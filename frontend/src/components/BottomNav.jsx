export default function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
      <nav className="flex items-center gap-2 lg:gap-3 bg-[#4A4A4A]/80 backdrop-blur-md text-white pl-4 pr-2 py-2 rounded-full shadow-2xl w-max mx-auto border border-white/10">
        <button className="flex items-center justify-center hover:bg-black/20 p-2 rounded-full transition-colors">
          <span className="material-symbols-outlined text-[20px]">inbox</span>
        </button>
        <button className="text-[13px] font-medium hover:bg-black/20 px-4 py-2 rounded-full transition-colors whitespace-nowrap">Projects</button>
        <button className="text-[13px] font-medium hover:bg-black/20 px-4 py-2 rounded-full transition-colors whitespace-nowrap">Experience</button>
        <button className="text-[13px] font-medium hover:bg-black/20 px-4 py-2 rounded-full transition-colors whitespace-nowrap">Testimonials</button>
        <button className="text-[13px] font-medium hover:bg-black/20 px-4 py-2 rounded-full transition-colors whitespace-nowrap lg:mr-2">Buy Coffee</button>
        <button className="bg-black text-white flex items-center gap-2 px-6 py-2.5 rounded-full hover:bg-black/80 transition-all shrink-0 shadow-lg">
          <span className="text-[13px] font-bold whitespace-nowrap">Let's talk</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </nav>
    </div>
  );
}
