const stats = [
  { n: "25+", l: "Years of combined leadership experience" },
  { n: "$1.4B", l: "Total project capital under stewardship" },
  { n: "120+", l: "Engagements delivered across the portfolio" },
  { n: "18", l: "Countries with active or completed mandates" },
];

const pillars = [
  {
    t: "Senior-led engagements",
    d: "Every mandate is owned by a partner. The team you meet is the team that delivers.",
  },
  {
    t: "Disciplined execution",
    d: "Project governance modelled on the standards of institutional capital and global delivery.",
  },
  {
    t: "Strategic foresight",
    d: "Recommendations drawn from sector research, regulatory insight, and on-the-ground intelligence.",
  },
  {
    t: "Discreet by design",
    d: "We protect client interests with the confidentiality our principal relationships require.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-32 bg-background">
      <div className="container-x">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Why Zephyr</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display leading-[1.05]">
            The standard our clients return for.
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden mb-20">
          {stats.map((s) => (
            <div key={s.l} className="bg-background p-10 hover:bg-secondary transition-colors duration-500">
              <div className="font-display text-5xl text-navy-deep">
                {s.n}
              </div>
              <div className="hairline my-5" />
              <div className="text-sm text-muted-foreground leading-relaxed">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {pillars.map((p, i) => (
            <div key={p.t} className="flex gap-6 group">
              <div className="font-display text-gold text-sm tracking-widest pt-1 w-10">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 border-t border-border pt-5 group-hover:border-gold transition-colors duration-500">
                <h3 className="font-display text-xl mb-3">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
