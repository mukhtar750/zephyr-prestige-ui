export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-navy-deep text-white overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-navy/40 blur-3xl" />

      <div className="container-x relative grid lg:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Begin a Conversation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display leading-[1.05]">
            Speak with a partner directly.
          </h2>
          <p className="mt-8 text-white/60 max-w-md leading-relaxed">
            Engagements begin with a confidential conversation. Share the
            opportunity in front of you and we'll route you to the right
            principal within two business days.
          </p>

          <div className="mt-14 space-y-8">
            {[
              { l: "Headquarters", v: "14 Marina Boulevard\nLagos, Nigeria" },
              { l: "Direct", v: "+234 (0) 1 460 8800\npartners@zephyr.co" },
              { l: "Office Hours", v: "Mon — Fri · 09:00 — 18:00 WAT" },
            ].map((b) => (
              <div key={b.l} className="flex gap-8">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold w-32 pt-1">{b.l}</div>
                <div className="text-white/85 whitespace-pre-line leading-relaxed flex-1 border-l border-white/10 pl-8">
                  {b.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="glass rounded-sm p-8 lg:p-10 space-y-6 self-start shadow-elegant">
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Full Name" placeholder="Jane Doe" />
            <Field label="Organisation" placeholder="Company or institution" />
          </div>
          <Field label="Email" type="email" placeholder="jane@company.com" />
          <div>
            <label className="block text-[10px] uppercase tracking-[0.25em] text-white/60 mb-2">
              Engagement Interest
            </label>
            <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-gold outline-none transition-colors">
              {["Select a service", "General Consultancy", "Business Development", "Mixed-Use Development", "Interior Design", "Training & Capacity", "Content & Communications"].map((o) => (
                <option key={o} className="bg-navy-deep">{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.25em] text-white/60 mb-2">
              Brief
            </label>
            <textarea
              rows={4}
              placeholder="Outline the opportunity in a few sentences."
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:border-gold outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="button"
            className="group w-full mt-4 inline-flex items-center justify-center gap-3 bg-white text-navy-deep px-7 py-4 rounded-sm font-medium hover:bg-gold transition-all duration-300"
          >
            Submit Enquiry
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          <p className="text-[11px] text-white/40 text-center">
            All enquiries are reviewed under non-disclosure.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.25em] text-white/60 mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:border-gold outline-none transition-colors"
      />
    </div>
  );
}
