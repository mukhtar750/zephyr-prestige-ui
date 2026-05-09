const stats = [
  { n: "07", l: "Specialised service practices under one firm" },
  { n: "2030", l: "Vision: Africa's go-to transformation partner" },
  { n: "RC", l: "Registered Nigerian entity · 733657" },
  { n: "End-to-End", l: "From ideation to post-delivery support" },
];

const pillars = [
  { t: "Multidisciplinary by design", d: "Strategy, development, design, trading and capacity — coordinated under a single accountable partnership." },
  { t: "Bespoke to every client", d: "We invest the time to understand nuanced requirements and architect solutions, never templates." },
  { t: "Sustainable advantage", d: "Our work is judged by the durability of the competitive advantage it creates for the organisations we serve." },
  { t: "Local insight, global standard", d: "Rooted in Abuja with an extended enterprise of local and international delivery partners." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32 bg-background">
      <div className="container-x">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Why Zephyr</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-[1.05]">
            The standard our clients return for.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden mb-16 sm:mb-20">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-8 sm:p-10 hover:bg-secondary transition-colors duration-500">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-deep">{s.n}</div>
              <div className="hairline my-4 sm:my-5" />
              <div className="text-sm text-muted-foreground leading-relaxed">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 sm:gap-y-12">
          {pillars.map((p, i) => (
            <div key={p.t} className="flex gap-5 sm:gap-6 group">
              <div className="font-display text-gold text-sm tracking-widest pt-1 w-10">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 border-t border-border pt-5 group-hover:border-gold transition-colors duration-500">
                <h3 className="font-display text-lg sm:text-xl mb-3">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
