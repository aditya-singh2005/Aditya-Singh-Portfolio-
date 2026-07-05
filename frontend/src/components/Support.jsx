export default function Support() {
  return (
    <section className="px-margin-mobile mb-24 text-center max-w-xl mx-auto">
      <p className="font-label-mono text-xs uppercase text-on-surface-variant mb-4 tracking-widest">SUPPORT</p>
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-6">Enjoying my content?</h2>
      <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
        Consider buying me a coffee to support my work! All the money that you donate will help me to create and improve my products so that I can provide you a better experience.
      </p>
      <a className="coffee-bounce inline-flex items-center gap-3 bg-[#FFDD00] text-on-surface px-8 py-4 rounded-xl font-bold transition-transform shadow-lg" href="#">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>coffee</span>
        Buy me a coffee
      </a>
      {/* Coffee Feed */}
      <div className="mt-12 space-y-4">
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-grid-line text-left">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-xl">payments</span>
          </div>
          <div>
            <p className="font-label-mono text-xs"><span className="font-bold">Alex</span> bought 25 coffees · 15m ago</p>
            <p className="text-on-surface-variant text-sm italic">"Thanks for this awesome tool."</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-grid-line text-left opacity-70">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-secondary text-xl">payments</span>
          </div>
          <div>
            <p className="font-label-mono text-xs"><span className="font-bold">Ernest</span> bought 2 coffees · 5h ago</p>
            <p className="text-on-surface-variant text-sm italic">"Really nice work!"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
