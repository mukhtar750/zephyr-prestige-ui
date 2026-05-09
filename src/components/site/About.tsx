import aboutImg from "@/assets/about-visual.jpg";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-background">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-[1.05]">
            Expertise at every stage. Excellence in every detail.
          </h2>
          <div className="mt-10 relative rounded-sm overflow-hidden shadow-elegant">
            <img
              src={aboutImg}
              alt="Abstract corporate visual"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-64 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">Guiding Principle</div>
              <div className="font-display text-lg leading-snug">
                "Success is where preparation and opportunity meet."
              </div>
              <div className="text-xs text-white/60 mt-1">— Bobby Unser</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-12 sm:space-y-14">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground/80 font-display">
            Zephyr Projects Limited is a multidisciplinary firm dedicated to
            excellence, innovation, and transformative solutions across a
            variety of sectors — blending deep industry knowledge with rigorous
            analysis to deliver bespoke outcomes.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed">
            Our team comprises seasoned professionals with decades of cumulative
            expertise. From large-scale mixed-use developments to targeted
            consultancy, we ensure precision in execution and excellence in
            delivery — enhancing value and maximising potential at every stage.
          </p>

          <div className="grid sm:grid-cols-2 gap-10 pt-10 border-t border-border">
            <div>
              <div className="eyebrow mb-4">Our Mission</div>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                To empower our clients with strategy and management services
                that enhance their operations and drive success — from ideation
                and concept design to portfolio management and post-delivery
                support across city management, real estate, business
                development, and capacity building.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-4">Our Vision · 2030</div>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                To be the go-to firm in Africa generating truly transformative
                ideas and innovative solutions for the organisations we serve —
                giving them sustainable competitive advantages at all times.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
            {[
              { k: "Discipline", v: "Methodical rigour in every engagement." },
              { k: "Integrity", v: "Counsel clients can act on with confidence." },
              { k: "Foresight", v: "Strategy drawn from where markets are moving." },
            ].map((p) => (
              <div key={p.k} className="bg-background p-6 sm:p-7">
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
