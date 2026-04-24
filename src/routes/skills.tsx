import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Sk Md Mounuden Hassn Rad" },
      {
        name: "description",
        content:
          "Tech stack: HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express, MongoDB, Firebase, and Git/GitHub.",
      },
      { property: "og:title", content: "Skills — Sk Md Mounuden Hassn Rad" },
      {
        property: "og:description",
        content: "React, Tailwind, Node.js, MongoDB, Firebase and more.",
      },
    ],
  }),
  component: SkillsPage,
});

const SKILL_GROUPS = [
  {
    title: "Frontend",
    accent: "from-emerald-400/30 to-cyan-400/30",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    accent: "from-cyan-400/30 to-purple-400/30",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database & Tools",
    accent: "from-purple-400/30 to-emerald-400/30",
    skills: ["MongoDB", "Firebase", "Git", "GitHub"],
  },
];

function SkillsPage() {
  return (
    <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Skills"
        title="The tools I build with."
        description="A growing toolkit focused on shipping modern, full-stack web applications."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="reveal group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div
              className={`absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-60 bg-gradient-to-br ${group.accent}`}
              aria-hidden
            />
            <h3 className="relative font-display text-xl font-semibold">{group.title}</h3>
            <ul className="relative mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-surface-elevated px-3.5 py-1.5 text-xs font-medium text-foreground/90 transition-all hover:border-primary/60 hover:text-primary hover:-translate-y-0.5"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
