import aboutImg from "@/assets/about-visual.jpg";

export function About() {
  return (
    <section id="about" className="relative py-32 bg-background">
      <div className="container-x grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Who We Are</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display leading-[1.05]">
            Strategic counsel for those building what comes next.
          </h2>
          <div className="mt-10 relative rounded-sm overflow-hidden shadow-elegant">
            <img
              src={aboutImg}
              alt="Abstract corporate visual"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 to-transparent" />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-14">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-display">
            Zephyr Projects Limited is a private consulting house operating at the
            intersection of strategy, capital, and the built environment — partnering
            with governments, institutions, and visionary investors to translate
            ambition into measurable outcomes.
          </p>

          <div className="grid sm:grid-cols-2 gap-10 pt-10 border-t border-border">
            <div>
              <div className="eyebrow mb-4">Our Mission</div>
              <p className="text-foreground/80 leading-relaxed">
                To deliver consulting and project management of unmistakable
                rigour — the kind that earns the quiet confidence of
                board rooms and the lasting respect of the communities we serve.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-4">Our Vision</div>
              <p className="text-foreground/80 leading-relaxed">
                To stand among the most trusted multidisciplinary firms shaping
                the next generation of African and global enterprise — defined by
                discipline, integrity, and design intelligence.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {[
              { k: "Discipline", v: "Methodical rigour in every engagement." },
              { k: "Integrity", v: "Counsel the client can act on with confidence." },
              { k: "Foresight", v: "Strategy drawn from where markets are moving." },
            ].map((p) => (
              <div key={p.k} className="bg-background p-7">
                <div className="font-display text-lg">{p.k}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
