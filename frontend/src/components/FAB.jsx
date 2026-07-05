export default function FAB() {
  return (
    <div className="fixed bottom-24 right-margin-mobile z-40">
      <button className="bg-on-surface text-white flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all">
        <span className="font-label-mono text-sm font-bold">Let's talk</span>
        <span className="material-symbols-outlined text-lg">arrow_forward</span>
      </button>
    </div>
  );
}
