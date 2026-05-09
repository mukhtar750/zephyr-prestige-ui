import heroImg from "@/assets/hero-architecture.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-navy-deep">
      <img
        src={heroImg}
        alt="Modern architectural skyscraper"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/70 to-navy-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/40 to-transparent" />

      {/* Floating glass UI accents */}
      <div className="hidden lg:block absolute top-32 right-12 w-64 glass rounded-md p-5 animate-float shadow-elegant">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-widest text-gold">Active Engagements</span>
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
        </div>
        <div className="text-white font-display text-3xl">42<span className="text-gold">.</span></div>
        <div className="text-white/50 text-xs mt-1">Across 9 sectors</div>
      </div>
      <div className="hidden lg:block absolute bottom-40 right-32 w-72 glass rounded-md p-5 shadow-elegant" style={{ animation: "float-slow 7s ease-in-out infinite 1s" }}>
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">Project Capital</div>
            <div className="text-white font-display text-2xl mt-1">$1.4B+</div>
          </div>
          <div className="text-gold text-xs">↑ Delivered</div>
        </div>
        <div className="hairline my-4" />
        <div className="flex justify-between text-[11px] text-white/50">
          <span>Strategy · Design · Build</span>
          <span>2014 — 2026</span>
        </div>
      </div>

      <div className="relative container-x pt-44 pb-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="eyebrow">Zephyr Projects Limited</span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-display">
            Architects of <em className="not-italic text-gold-gradient">enduring</em><br />
            enterprise value.
          </h1>
          <p className="mt-10 max-w-xl text-lg text-white/70 leading-relaxed">
            A multidisciplinary consulting and project management firm shaping
            landmark developments, executive strategy, and institutional growth
            across emerging and global markets.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-white text-navy-deep px-7 py-4 rounded-sm font-medium hover:bg-gold transition-all duration-300"
            >
              Begin a Conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-white border border-white/20 px-7 py-4 rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
            >
              Explore Our Practice
            </a>
          </div>

          <div className="mt-20 grid grid-cols-3 max-w-2xl gap-8 border-t border-white/10 pt-10">
            {[
              ["120+", "Engagements"],
              ["18", "Countries"],
              ["95%", "Repeat Clients"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-white">{n}</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-[0.3em] flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
