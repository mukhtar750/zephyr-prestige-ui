export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-navy-deep text-white overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-navy/40 blur-3xl" />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-[1.05]">
            Let's discuss how we can assist your business.
          </h2>
          <p className="mt-6 sm:mt-8 text-white/60 max-w-md leading-relaxed text-sm sm:text-base">
            For information on how Zephyr Projects Limited can support your
            business needs, reach out — a partner will respond within two
            business days.
          </p>

          <div className="mt-12 sm:mt-14 space-y-6 sm:space-y-8">
            {[
              { l: "Headquarters", v: "H5, 5 Tanba Street\nWuse II, Abuja, Nigeria" },
              { l: "Telephone", v: "+234 802 413 1322" },
              { l: "Email", v: "zephyrprojectsltd@gmail.com" },
              { l: "Web", v: "www.zephyrprojectsltd.com" },
            ].map((b) => (
              <div key={b.l} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold sm:w-32 sm:pt-1 shrink-0">{b.l}</div>
                <div className="text-white/85 whitespace-pre-line leading-relaxed flex-1 sm:border-l sm:border-white/10 sm:pl-8">
                  {b.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="glass rounded-sm p-7 sm:p-8 lg:p-10 space-y-6 self-start shadow-elegant">
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Full Name" placeholder="Your name" />
            <Field label="Organisation" placeholder="Company or institution" />
          </div>
          <Field label="Email" type="email" placeholder="you@company.com" />
          <div>
            <label className="block text-[10px] uppercase tracking-[0.25em] text-white/60 mb-2">
              Service of Interest
            </label>
            <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-gold outline-none transition-colors">
              {[
                "Select a service",
                "General Consultancy",
                "General Trading & Supplies",
                "Business Development Support",
                "Large Scale Mixed-Use Development",
                "Interior Design Services",
                "Training & Capacity Development",
                "Content Development & Management",
              ].map((o) => (
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
            All enquiries are reviewed under confidentiality.
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
