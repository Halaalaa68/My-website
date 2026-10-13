import { useEffect, useState } from "react";
import { LINKS } from "../data";

const ITEMS = [
  ["Weddings", "#weddings"],
  ["Planners", "#planners"],
  ["Events", "#events"],
  ["Brands", "#brands"],
  ["Packages", "#packages"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-serif text-2xl tracking-[0.22em] text-cream">
          PHOTOGRAPHALA
        </a>
        <nav className="hidden items-center gap-8 text-[11px] tracking-[0.22em] uppercase md:flex">
          {ITEMS.map(([label, href]) => (
            <a key={href} href={href} className="text-cream/70 transition hover:text-gold">
              {label}
            </a>
          ))}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="border border-gold/70 px-4 py-2 text-gold transition hover:bg-gold hover:text-ink"
          >
            WhatsApp
          </a>
        </nav>
        <button
          type="button"
          className="text-cream md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-7 bg-cream" />
          <span className="mt-1.5 block h-px w-7 bg-cream" />
          <span className="mt-1.5 block h-px w-5 bg-cream" />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-cream/10 px-5 py-6 text-sm tracking-[0.2em] uppercase md:hidden">
          {ITEMS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-cream/80">
              {label}
            </a>
          ))}
          <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="text-gold">
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
