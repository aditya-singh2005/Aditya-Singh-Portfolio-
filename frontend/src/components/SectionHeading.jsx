// Reusable section heading with the itsvg.in letter-stripe animation
export default function SectionHeading({ title }) {
  const letters = title.split('');
  return (
    <div className="text-center text-5xl sm:text-7xl xl:text-8xl mb-12">
      <ul className="nav-ul list-none p-0 m-0 inline-block">
        <li className="nav-li inline-block relative pb-4">
          <span className="nav-a relative inline-flex cursor-default select-none">
            {/* Bottom layer: decorative stripes */}
            <span className="nav-a-stripe nav-a-stripe--yellow"> </span>
            <span className="nav-a-stripe nav-a-stripe--turquoise"> </span>
            <span className="nav-a-stripe nav-a-stripe--purple"> </span>

            {/* Main letters (bottom, visible normally) */}
            <span className="nav-a-letters flex">
              {letters.map((letter, i) => (
                <span key={i} className="nav-a-letter">{letter}</span>
              ))}
            </span>

            {/* Top letters (revealed on stripe sweep) */}
            <span className="nav-a-letters-top flex">
              {letters.map((letter, i) => (
                <span key={i} className="nav-a-letter">{letter}</span>
              ))}
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
}
