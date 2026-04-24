import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

/** Sticky blurred navbar with mobile drawer + GSAP entrance. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Entrance animation
  useEffect(() => {
    if (!navRef.current) return;
    gsap.from(navRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight"
          aria-label="Go to home"
        >
          <span className="text-gradient">Mounuden</span>
          <span className="text-muted-foreground">.dev</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{
                  className:
                    "relative px-4 py-2 text-sm font-medium text-foreground after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-6 after:rounded-full after:bg-primary",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border bg-glass">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-surface hover:text-foreground"
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{
                    className:
                      "block rounded-lg px-4 py-3 text-sm font-medium text-foreground bg-surface",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
