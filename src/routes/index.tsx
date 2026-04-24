import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sk Md Mounuden Hassn Rad — CSE Student & Web Developer" },
      {
        name: "description",
        content:
          "Hi, I'm Sk Md Mounuden Hassn Rad — a CSE student in Khulna building modern, animated web experiences with React and Tailwind.",
      },
      { property: "og:title", content: "Sk Md Mounuden Hassn Rad — Portfolio" },
      {
        property: "og:description",
        content: "CSE Student • Web Developer • Tech Enthusiast based in Khulna, Bangladesh.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  // GSAP timeline for the hero entrance + floating shapes
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(
          ".hero-title-line",
          { y: 60, opacity: 0, duration: 0.9, stagger: 0.12 },
          "-=0.3",
        )
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".hero-intro", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4",
        )
        .from(".hero-meta", { opacity: 0, duration: 0.6 }, "-=0.3");

      // Floating background shapes
      gsap.to(".float-1", {
        y: -40,
        x: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-2", {
        y: 30,
        x: -25,
        duration: 7.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".float-3", {
        y: -25,
        x: -15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center"
    >
      {/* Background grid + floating orbs */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div
        className="float-1 absolute top-20 -left-10 h-72 w-72 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "var(--emerald)" }}
        aria-hidden
      />
      <div
        className="float-2 absolute bottom-10 right-0 h-80 w-80 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "var(--purple)" }}
        aria-hidden
      />
      <div
        className="float-3 absolute top-1/3 right-1/4 h-56 w-56 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "var(--cyan)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 w-full">
        <span className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary">
          <Sparkles className="h-3 w-3" />
          Available for internships
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
          <span className="hero-title-line block">Hi, I&apos;m</span>
          <span className="hero-title-line block text-gradient">Sk Md Mounuden</span>
          <span className="hero-title-line block">Hassn Rad.</span>
        </h1>

        <p className="hero-sub mt-6 text-lg md:text-2xl font-medium text-muted-foreground">
          CSE Student <span className="text-primary">·</span> Web Developer{" "}
          <span className="text-primary">·</span> Tech Enthusiast
        </p>

        <p className="hero-intro mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          I&apos;m a 5th semester Computer Science student at Northern University, Khulna. I love
          turning ideas into clean, fast, and delightful web experiences using React, Tailwind,
          and modern JavaScript.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/projects"
            className="hero-cta group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="hero-cta inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/60 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Link>
        </div>

        <div className="hero-meta mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Shib Bari, Khulna — Bangladesh
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Open to opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
