import { Link } from "@tanstack/react-router";

import heroImage from "../assets/hero_light.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/speakers", label: "Speakers" },
  { to: "/committee", label: "Committee" },
  { to: "/program", label: "Program" },
  { to: "/general", label: "General" },
  { to: "/registration", label: "Registration & Abstracts" },
  { to: "/deadlines", label: "Deadlines" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-border bg-background/90 overflow-hidden">
      {/* Wave Background */}
      <img
        src={heroImage}
        alt="Harmonic waves"
        width={1920}
        height={300}
        className="absolute inset-0 h-full w-full object-cover opacity-20 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      <div className="container-prose relative z-10 py-6">
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="text-[0.7rem] md:text-[0.8rem] uppercase tracking-[0.4em] font-bold text-accent">
            International Conference on
          </span>
          <Link
            to="/"
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight hover:text-primary transition-colors mt-1 block"
          >
            Applied Harmonic Analysis &amp; Data Science
          </Link>
          <p className="text-[0.8rem] md:text-[0.9rem] uppercase tracking-[0.32em] font-semibold text-foreground/80 mt-2">
            15–18 December 2026 · IIT Madras
          </p>
          <div className="rule-gold w-48 mt-3" />
        </div>
        <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[0.78rem] uppercase tracking-[0.18em]">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-foreground/75 hover:text-primary font-semibold transition-colors data-[status=active]:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
