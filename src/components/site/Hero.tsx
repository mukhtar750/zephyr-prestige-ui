import heroImg from "@/assets/hero-architecture.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-navy-deep">
      <img
        src={heroImg}
        alt="Modern architectural facade — Zephyr Projects"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/70 to-navy-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/40 to-transparent" />

      {/* Floating glass UI accents — desktop only */}
      <div className="hidden lg:block absolute top-32 right-12 w-64 glass rounded-md p-5 animate-float shadow-elegant">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-widest text-gold">Active Mandates</span>
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
        </div>
        <div className="text-white font-display text-3xl">7<span className="text-gold">.</span></div>
        <div className="text-white/50 text-xs mt-1">Service practices</div>
      </div>
      <div className="hidden lg:block absolute bottom-40 right-32 w-72 glass rounded-md p-5 shadow-elegant" style={{ animation: "float-slow 7s ease-in-out infinite 1s" }}>
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">Vision Horizon</div>
            <div className="text-white font-display text-2xl mt-1">2030</div>
          </div>
          <div className="text-gold text-xs">Africa's go-to firm</div>
        </div>
        <div className="hairline my-4" />
        <div className="flex justify-between text-[11px] text-white/50">
          <span>Strategy · Design · Delivery</span>
          <span>RC-733657</span>
        </div>
      </div>

      <div className="relative container-x pt-36 pb-24 sm:pt-44 sm:pb-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="eyebrow">Zephyr Projects Limited · RC-733657</span>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-display">
            Providing <em className="not-italic text-gold-gradient">excellence</em><br className="hidden sm:block" />
            in every detail.
          </h1>
          <p className="mt-8 sm:mt-10 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
            A multidisciplinary consulting and project management firm
            empowering organisations across Africa with strategy, large-scale
            development, and bespoke execution — from ideation to post-delivery
            support.
          </p>
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-white text-navy-deep px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm font-medium hover:bg-gold transition-all duration-300 text-sm sm:text-base"
            >
              Begin a Conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-white border border-white/20 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm hover:border-gold hover:text-gold transition-all duration-300 text-sm sm:text-base"
            >
              Explore Our Practice
            </a>
          </div>

          <div className="mt-16 sm:mt-20 grid grid-cols-3 max-w-2xl gap-6 sm:gap-8 border-t border-white/10 pt-8 sm:pt-10">
            {[
              ["07", "Service Lines"],
              ["2030", "Vision Horizon"],
              ["100%", "Bespoke Delivery"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl sm:text-3xl text-white">{n}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-[0.3em] flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
