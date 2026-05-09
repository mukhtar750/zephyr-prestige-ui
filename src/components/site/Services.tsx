const services = [
  { n: "01", t: "General Consultancy", d: "Strategic analysis, operational improvements, and financial advisory equipping businesses for success in a rapidly evolving market." },
  { n: "02", t: "General Trading & Supplies", d: "Procurement and distribution of goods with quality and supply chain efficiency supporting operations across industries." },
  { n: "03", t: "Business Development Support", d: "Expert guidance to expand market reach, forge profitable partnerships, and innovate business models for sustained growth." },
  { n: "04", t: "Large Scale Mixed-Use Development", d: "End-to-end management — project briefs, urban and master planning, architectural design, value engineering, and post-delivery support." },
  { n: "05", t: "Interior Design Services", d: "Bespoke spaces combining aesthetics with function — from concept design and renders to procurement and turn-key set-up." },
  { n: "06", t: "Training & Capacity Development", d: "Comprehensive programmes via local and international delivery partners, building skills for the demands of today's enterprise." },
  { n: "07", t: "Content Development & Management", d: "High-quality, engaging content that strengthens brand visibility, communication strategy, and customer engagement." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-charcoal text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-[1.05]">
              Seven disciplines. One standard of excellence.
            </h2>
          </div>
          <p className="max-w-md text-white/60 leading-relaxed text-sm sm:text-base">
            Each practice operates as a specialist studio — and integrates
            seamlessly when an engagement demands a unified mandate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative bg-charcoal p-8 sm:p-10 lg:p-12 transition-all duration-500 hover:bg-navy cursor-pointer overflow-hidden min-h-[260px]"
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              <div className="flex items-start justify-between mb-8 sm:mb-10">
                <span className="font-display text-gold text-sm tracking-widest">{s.n}</span>
                <span className="text-white/30 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1">→</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl leading-tight mb-4 sm:mb-5 max-w-[16ch]">{s.t}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{s.d}</p>
            </div>
          ))}
          <div className="hidden lg:flex bg-charcoal p-12 items-center">
            <div>
              <div className="eyebrow mb-4">Quality Note</div>
              <p className="font-display text-lg leading-snug text-white/85">
                "Quality is never an accident; it is always the result of intelligent effort."
              </p>
              <p className="text-xs text-white/40 mt-3">— John Ruskin</p>
            </div>
          </div>
          <div className="hidden sm:flex lg:hidden bg-charcoal p-10 items-center">
            <div>
              <div className="eyebrow mb-3">Quality Note</div>
              <p className="font-display text-base leading-snug text-white/85">
                "Quality is never an accident; it is always the result of intelligent effort."
              </p>
              <p className="text-xs text-white/40 mt-3">— John Ruskin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
