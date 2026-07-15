export default function About() {
  return (
    <section className="mt-10 mx-auto px-margin-mobile mb-24 text-center">
      <p className="font-headline-lg-mobile text-headline-lg-mobile mb-6">
        👋 Hey, I'm Aditya Singh, always building, learning, and shipping new ideas.
      </p>

      <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
        Building full-stack applications, exploring Agentic AI, and solving real-world problems.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-label-mono text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-base">dns</span>
          Backend
        </span>

        <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary font-label-mono text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-base">web</span>
          Full Stack
        </span>

        <span className="px-4 py-2 rounded-full bg-tertiary/10 text-tertiary font-label-mono text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-base">smart_toy</span>
          Agentic AI
        </span>

        <span className="px-4 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label-mono text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-base">psychology</span>
          Problem Solving
        </span>

        <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-label-mono text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-base">school</span>
          Always Learning
        </span>
      </div>
    </section>
  );
}