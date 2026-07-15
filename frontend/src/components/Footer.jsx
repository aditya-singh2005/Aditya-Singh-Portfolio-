import GradientText from '../UI/GradientText';

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-black/10 dark:border-white/10 pt-16 pb-24 mt-12 overflow-hidden bg-transparent">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-80 mix-blend-overlay dark:opacity-20"
        style={{
          backgroundImage: "url('/robot2.jpeg')",
          backgroundSize: "110%",
          backgroundPosition: "center",
        }}
      />
      {/* Background Glow & Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[50%] h-32 bg-gradient-to-t from-violet-500/10 to-transparent blur-[80px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center gap-4 relative z-10 py-8">

        <div className="flex flex-col items-center relative z-10">
          <GradientText
            colors={["#5227FF","#ff41f9ff", "#ff0084ff", "#640eb5ff"  ,"#00d7cdff"]}
            animationSpeed={3}
            showBorder={false}
            className="text-2xl md:text-4xl font-bold text-center drop-shadow-md"
          >
            ThanksForVisitingMyPortfolio!
          </GradientText>
        </div>

        <div className="flex items-center gap-2 text-black/90 dark:text-white/90 text-sm md:text-base mt-2 font-bold tracking-wide">
          <span>Code and crafted with</span>
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400/50 opacity-75"></span>
            <span className="relative text-red-500 text-lg hover:scale-125 transition-transform duration-300 drop-shadow-md">❤️</span>
          </span>
          <span>by Aditya Singh</span>
        </div>
      </div>
    </footer>
  );
}
