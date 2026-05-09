export function Footer() {
  return (
    <footer className="bg-charcoal text-white/60">
      <div className="container-x py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="h-8 w-8 rounded-sm bg-gold-gradient flex items-center justify-center">
                <span className="font-display text-navy-deep text-sm font-bold">Z</span>
              </div>
              <span className="text-white font-display text-lg">Zephyr Projects Limited</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              A multidisciplinary consulting and project management firm.
              Providing excellence in every detail — from strategy and design
              to disciplined execution.
            </p>
            <p className="mt-4 text-xs text-white/40">RC-733657 · Abuja, Nigeria</p>
          </div>

          {[
            { h: "Practice", l: ["Consultancy", "Trading & Supplies", "Business Development", "Mixed-Use Development", "Interior Design", "Training", "Content"] },
            { h: "Firm", l: ["About", "Vision 2030", "Our Team", "Careers"] },
            { h: "Contact", l: ["Wuse II, Abuja", "+234 802 413 1322", "zephyrprojectsltd@gmail.com"] },
          ].map((c) => (
            <div key={c.h} className="lg:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">{c.h}</div>
              <ul className="space-y-3 text-sm">
                {c.l.map((i) => (
                  <li key={i}><a href="#" className="hover:text-white transition-colors">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline my-10 sm:my-12 opacity-40" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs">
          <div>© {new Date().getFullYear()} Zephyr Projects Limited. All rights reserved.</div>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">www.zephyrprojectsltd.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
