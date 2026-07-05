export default function Terminal() {
  return (
    <section className="px-margin-mobile mb-24 max-w-2xl mx-auto">
      <div className="bg-terminal-bg rounded-xl overflow-hidden shadow-2xl border border-white/5">
        <div className="bg-[#323232] px-4 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <span className="font-terminal-text text-terminal-text text-white/50 text-xs">terminal — bash</span>
          <div className="w-12"></div>
        </div>
        <div className="p-6 font-terminal-text text-terminal-text text-white/90 space-y-4">
          <p className="text-white/40">Last login: Sun Sep 14 12:00:49 on console</p>
          <div className="space-y-1">
            <p><span className="text-terminal-green">user@machine:</span><span className="text-primary-fixed-dim">~</span>$ fortune</p>
            <p className="pl-4 italic text-secondary-fixed-dim">"Perfection may not be attainable, but if we chase perfection, we can catch excellence."</p>
          </div>
          <p><span className="text-terminal-green">user@machine:</span><span className="text-primary-fixed-dim">~</span>$ <span className="animate-pulse bg-white/50 w-2 h-4 inline-block align-middle"></span></p>
        </div>
      </div>
    </section>
  );
}
