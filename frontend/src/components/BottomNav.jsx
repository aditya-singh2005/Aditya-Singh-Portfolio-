export default function BottomNav() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
      <nav className="flex items-center gap-0.5 sm:gap-2 lg:gap-3 bg-[#4A4A4A]/80 backdrop-blur-md text-white pl-1.5 sm:pl-4 pr-1 sm:pr-2 py-1.5 sm:py-2 rounded-full shadow-2xl w-max mx-auto border border-white/10">
        <button onClick={() => scrollTo('hero')} className="flex items-center justify-center hover:bg-black/20 p-2 rounded-full transition-colors shrink-0">
          <img 
            src="/house.png"
            alternate="house"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </button>
        <button onClick={() => scrollTo('about-me')} className="text-[11px] sm:text-[13px] font-medium hover:bg-black/20 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors whitespace-nowrap shrink-0">About Me</button>
        <button onClick={() => scrollTo('terminal')} className="text-[11px] sm:text-[13px] font-medium hover:bg-black/20 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors whitespace-nowrap shrink-0">AMA</button>
        <button onClick={() => scrollTo('projects')} className="text-[11px] sm:text-[13px] font-medium hover:bg-black/20 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors whitespace-nowrap shrink-0">Projects</button>
        <button onClick={() => scrollTo('experience')} className="text-[11px] sm:text-[13px] font-medium hover:bg-black/20 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors whitespace-nowrap shrink-0">Experience</button>
        <button onClick={() => scrollTo('connect')} className="bg-black text-white flex items-center justify-center gap-1 sm:gap-2 w-8 h-8 sm:w-auto sm:h-auto sm:px-6 sm:py-2.5 rounded-full hover:bg-black/80 transition-all shrink-0 shadow-lg ml-0.5 sm:ml-0">
          <span className="hidden sm:inline text-[13px] font-bold whitespace-nowrap">Let's Connect!</span>
          <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
        </button>
      </nav>
    </div>
  );
}
