export default function Footer() {
  return (
    <>
      <section className="px-margin-mobile mb-24 text-center">
        <p className="font-body-sm text-on-surface-variant mb-6">Connect with me on:</p>
        <div className="flex justify-center gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">link</span></a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">forum</span></a>
        </div>
      </section>
      <footer className="px-margin-mobile text-center pb-8 border-t border-grid-line pt-8 opacity-60">
        <p className="font-body-sm text-xs leading-relaxed">
          Thanks for visiting my portfolio! | Code &amp; Crafted with 💛 by Aditya Singh
        </p>
      </footer>
    </>
  );
}
