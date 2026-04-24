import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, MapPin, Code2, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sk Md Mounuden Hassn Rad" },
      {
        name: "description",
        content:
          "Learn about Sk Md Mounuden Hassn Rad — a 5th semester CSE student at Northern University, Khulna, passionate about web development.",
      },
      { property: "og:title", content: "About — Sk Md Mounuden Hassn Rad" },
      {
        property: "og:description",
        content:
          "5th semester CSE student at Northern University, Khulna. Passionate about modern web development.",
      },
    ],
  }),
  component: AboutPage,
});

const FACTS = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "5th semester Computer Science & Engineering student at Northern University, Khulna.",
  },
  {
    icon: MapPin,
    title: "Location",
    text: "Currently living in Shib Bari, Khulna — Bangladesh.",
  },
  {
    icon: Code2,
    title: "Focus",
    text: "Modern web development with React, Tailwind, and the JavaScript ecosystem.",
  },
  {
    icon: Rocket,
    title: "Mission",
    text: "Always learning, building, and shipping creative projects that solve real problems.",
  },
];

function AboutPage() {
  return (
    <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="About Me"
        title="A curious builder from Khulna."
        description="I'm Sk Md Mounuden Hassn Rad — a CSE student who loves the craft of turning ideas into polished, performant web experiences."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {FACTS.map((fact) => (
          <div
            key={fact.title}
            className="reveal group relative rounded-2xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <fact.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{fact.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{fact.text}</p>
          </div>
        ))}
      </div>

      <div className="reveal mt-10 rounded-2xl border-gradient p-8 md:p-10">
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          Beyond the classroom, I spend my time exploring new technologies, contributing to small
          side-projects, and refining my craft as a developer. I believe great software is built
          with empathy — for the user, the team, and the future engineer who&apos;ll read your
          code.
        </p>
      </div>
    </Reveal>
  );
}
