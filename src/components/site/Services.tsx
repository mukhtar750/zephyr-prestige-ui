const services = [
  {
    n: "01",
    t: "General Consultancy",
    d: "Executive advisory across strategy, governance, and operational transformation for institutions navigating complexity.",
  },
  {
    n: "02",
    t: "Business Development",
    d: "Market entry, partnership architecture, and growth strategy designed to compound advantage over time.",
  },
  {
    n: "03",
    t: "Large Scale Mixed-Use Development",
    d: "End-to-end project management of landmark developments — from feasibility and capital to delivery and activation.",
  },
  {
    n: "04",
    t: "Interior Design Services",
    d: "Considered, materially honest interiors for corporate, hospitality, and residential environments of distinction.",
  },
  {
    n: "05",
    t: "Training & Capacity Development",
    d: "Bespoke leadership and technical programs that build durable institutional capability from the inside out.",
  },
  {
    n: "06",
    t: "Content Development & Management",
    d: "Editorial, communications, and knowledge systems that establish authority and shape public conversation.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-charcoal text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Our Practice</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display leading-[1.05]">
              Six disciplines. One standard of excellence.
            </h2>
          </div>
          <p className="max-w-md text-white/60 leading-relaxed">
            Each service line operates as a specialist studio — and integrates
            seamlessly when the engagement demands a unified mandate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative bg-charcoal p-10 lg:p-12 transition-all duration-500 hover:bg-navy cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              <div className="flex items-start justify-between mb-10">
                <span className="font-display text-gold text-sm tracking-widest">{s.n}</span>
                <span className="text-white/30 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="font-display text-2xl leading-tight mb-5 max-w-[14ch]">{s.t}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
