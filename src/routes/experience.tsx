import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sk Md Mounuden Hassn Rad" },
      {
        name: "description",
        content:
          "Academic, web development, and teamwork experience of Sk Md Mounuden Hassn Rad.",
      },
      { property: "og:title", content: "Experience — Sk Md Mounuden Hassn Rad" },
      {
        property: "og:description",
        content: "Student, builder, collaborator — my journey so far.",
      },
    ],
  }),
  component: ExperiencePage,
});

const TIMELINE = [
  {
    period: "2023 — Present",
    role: "B.Sc. in Computer Science & Engineering",
    org: "Northern University, Khulna",
    text: "Currently in 5th semester. Studying core CS, data structures, algorithms, databases, and software engineering.",
  },
  {
    period: "2023 — Present",
    role: "Self-taught Web Developer",
    org: "Independent practice",
    text: "Building real-world projects with React, Tailwind, Node.js, and MongoDB. Continuously learning and shipping.",
  },
  {
    period: "Ongoing",
    role: "Team Collaboration & Communication",
    org: "University projects & online communities",
    text: "Collaborated on group projects, led small teams, and practiced clear technical communication across asynchronous tools.",
  },
];

function ExperiencePage() {
  return (
    <Reveal className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Where I'm growing."
        description="The mix of academic, technical, and collaborative experience that shapes how I work."
      />

      <ol className="relative border-l border-border ml-3">
        {TIMELINE.map((item) => (
          <li key={item.role} className="reveal mb-10 ml-6">
            <span
              className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full border-2 border-background bg-primary shadow-glow"
              aria-hidden
            />
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {item.period}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold">{item.role}</h3>
            <p className="text-sm text-muted-foreground">{item.org}</p>
            <p className="mt-3 text-sm md:text-base text-foreground/90 leading-relaxed">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
