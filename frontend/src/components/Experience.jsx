export default function Experience() {
  return (
    <section className="px-margin-mobile mb-24">
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-center mb-12">Experience</h2>
      <div className="relative w-full max-w-sm mx-auto aspect-[1.6/1] bg-gradient-to-br from-[#021B79] to-[#0575E6] rounded-2xl overflow-hidden shadow-xl p-6 text-white flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-label-mono text-[10px] uppercase tracking-widest opacity-70">Experience Card</p>
            <h4 className="font-label-mono font-bold text-sm mt-1">SOFTWARE DEVELOPMENT ENGINEER</h4>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-sm">chip_extraction</span>
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex justify-between items-end">
            <div>
              <p className="font-label-mono text-[10px] uppercase opacity-50">Company Name</p>
              <p className="font-headline-lg-mobile text-lg">Zivy Pvt. Ltd</p>
            </div>
            <div className="text-right">
              <p className="font-label-mono text-[10px] uppercase opacity-50">Tenure</p>
              <p className="font-body-sm text-xs">03/2023 - 01/2024</p>
            </div>
          </div>
        </div>
        {/* Glass Reflection Overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-30 pointer-events-none transform -skew-x-12 translate-x-1/2"></div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-8 text-on-surface-variant font-label-mono text-xs">
        <span className="material-symbols-outlined animate-bounce">mouse</span> Scroll this way &gt;&gt;
      </div>
    </section>
  );
}
