import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#team", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-navy-deep/85 backdrop-blur-xl border-b border-white/5" : "py-6"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="h-8 w-8 rounded-sm bg-gold-gradient flex items-center justify-center shadow-gold">
            <span className="font-display text-navy-deep text-sm font-bold">Z</span>
          </div>
          <span className="text-white font-display text-lg tracking-tight">
            Zephyr<span className="text-gold"> .</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm text-navy-deep bg-white px-5 py-2.5 rounded-sm hover:bg-gold transition-colors duration-300 font-medium"
        >
          Engage Us
          <span className="text-base leading-none">→</span>
        </a>
      </div>
    </header>
  );
}
