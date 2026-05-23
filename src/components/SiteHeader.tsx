import { Link, useLocation } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const nav = [
  { to: "/", label: "Home" },
  { to: "/speakers", label: "Speakers" },
  { to: "/committee", label: "Committee" },
  { to: "/program", label: "Program" },
  { to: "/general", label: "General" },
  { to: "/deadlines", label: "Deadlines" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
export function SiteHeader() {
  const location = useLocation();
  const isRegistrationOrAbstractsActive = location.pathname === "/registration";

  return (
    <header className="relative z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="container-prose py-5">
        <div className="flex flex-col items-center gap-1.5 text-center">
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight hover:text-primary transition-colors"
          >
            Applied Harmonic Analysis &amp; Data Science
          </Link>
          <p className="text-[0.72rem] uppercase tracking-[0.32em] font-semibold text-foreground/80">
            15–18 December 2026 · IIT Madras
          </p>
          <div className="rule-gold w-40 mt-2" />
        </div>
        <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[0.78rem] uppercase tracking-[0.18em]">
          {nav.slice(0, 5).map((item) => (
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

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`cursor-pointer transition-colors uppercase tracking-[0.18em] text-[0.78rem] font-semibold outline-none ${
                isRegistrationOrAbstractsActive
                  ? "text-accent font-bold"
                  : "text-foreground/75 hover:text-primary"
              }`}
            >
              Registration &amp; Abstracts
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="bg-background border border-border min-w-[12rem] py-1.5 shadow-md z-50"
            >
              <DropdownMenuItem asChild className="focus:bg-secondary/60 focus:text-primary">
                <Link
                  to="/registration"
                  activeProps={{ className: "text-accent font-semibold" }}
                  className="w-full cursor-pointer px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.12em] text-foreground/75 hover:text-primary block transition-colors"
                >
                  Registration Info
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-secondary/60 focus:text-primary">
                <Link
                  to="/registration"
                  hash="abstracts"
                  activeProps={{ className: "text-accent font-semibold" }}
                  className="w-full cursor-pointer px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.12em] text-foreground/75 hover:text-primary block transition-colors"
                >
                  Abstract Submission
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {nav.slice(5).map((item) => (
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

