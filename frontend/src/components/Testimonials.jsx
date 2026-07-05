export default function Testimonials() {
  return (
    <section className="px-margin-mobile mb-24 bg-surface-container-low py-16 rounded-[40px] mx-margin-mobile">
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-center mb-12">Testimonials</h2>
      <div className="max-w-xl mx-auto text-center">
        <span className="material-symbols-outlined text-primary text-5xl mb-6">format_quote</span>
        <p className="font-body-md italic text-on-surface-variant mb-8 leading-relaxed">
          "I stumbled upon Aditya's ColPat tool when I was struggling with color choices for my website. It's like having a personal AI designer! The interface is intuitive, and the color suggestions are spot-on. I've used it for three projects now, and each time it's saved me hours of indecision. Definitely my go-to tool for color palettes now!"
        </p>
        <div className="flex flex-col items-center gap-2">
          <p className="font-headline-lg-mobile text-lg">Alex Chen</p>
          <div className="flex text-tertiary-container">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button className="w-10 h-10 rounded-full border border-grid-line flex items-center justify-center hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-grid-line flex items-center justify-center hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
