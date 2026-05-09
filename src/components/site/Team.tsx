import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

const team = [
  { img: t1, name: "Adaeze Okonkwo", role: "Managing Partner", bio: "Strategy & Capital Markets" },
  { img: t2, name: "Kwame Mensah", role: "Partner, Development", bio: "Mixed-Use & Infrastructure" },
  { img: t3, name: "Naledi Dlamini", role: "Partner, Design Practice", bio: "Interiors & Brand Environments" },
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-secondary">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display leading-[1.05]">
              A partnership of operators, designers, and strategists.
            </h2>
          </div>
          <a href="#contact" className="text-sm text-navy-deep border-b border-navy-deep pb-1 hover:text-gold hover:border-gold transition-colors">
            Meet the full team →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m) => (
            <article key={m.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep rounded-sm">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{m.role}</div>
                  <div className="font-display text-2xl">{m.name}</div>
                </div>
              </div>
              <div className="pt-5 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{m.bio}</span>
                <span className="text-navy-deep group-hover:text-gold transition-colors">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
