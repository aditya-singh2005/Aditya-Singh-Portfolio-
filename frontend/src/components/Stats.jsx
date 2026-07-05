export default function Stats() {
  return (
    <section className="relative py-24 mb-24 overflow-hidden bg-primary/5 rounded-3xl mx-margin-mobile">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/AP1WRLuR7OjBFEXtS4PH5w4rRAJWJ26HXCZVnTW-5DCRp07oAnLOFsuA3gzVAk3OQ380tKULHvyQyvauCMycZ8-nx6u0DMqXHdFhZKYSoj6cKU9qUIVX2TM4O4iH3--oo2aIBgDGj3yv-mtRmh1M7cJoZ1EocT_PQKTvtT0qf2yZfLuVw5_sX3gi6kLyQwLV8XUKrS8AbipnLOiU-YBxD712CC9O1v1ICeZXx-uVGq_qEJcrkDwvN2t_yiHTKx4')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
      <div className="relative z-10 px-margin-mobile text-center">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 max-w-lg mx-auto">Our Products are used and loved by people from all around the world</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-4xl mx-auto">
          <div>
            <p className="font-display-hero text-4xl mb-2">1,500,000+</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Happy Users Worldwide</p>
          </div>
          <div>
            <p className="font-display-hero text-4xl mb-2">114+</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Country's people</p>
          </div>
          <div>
            <p className="font-display-hero text-4xl mb-2">45+</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Products Launched</p>
          </div>
        </div>
      </div>
    </section>
  );
}
