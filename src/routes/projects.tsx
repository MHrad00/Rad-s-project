import { createFileRoute } from "@tanstack/react-router";
import { Github, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sk Md Mounuden Hassn Rad" },
      {
        name: "description",
        content:
          "Selected web development projects built with React, Tailwind CSS, Node.js, and MongoDB.",
      },
      { property: "og:title", content: "Projects — Sk Md Mounuden Hassn Rad" },
      {
        property: "og:description",
        content: "A selection of full-stack and frontend projects.",
      },
    ],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  {
    title: "DevFolio — Portfolio Builder",
    description:
      "A drag-and-drop portfolio builder for students with live preview, theme presets, and one-click deploy.",
    stack: ["React", "Tailwind", "Firebase"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "TaskWave — Productivity App",
    description:
      "Minimal task manager with smart reminders, drag-and-drop boards, and offline-first sync.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "ShopLite — E-Commerce Starter",
    description:
      "Lightweight e-commerce template with cart, checkout, and admin dashboard ready to ship.",
    stack: ["Next.js", "Express", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "PulseChat — Realtime Messaging",
    description:
      "Realtime chat app with rooms, typing indicators, and WebSocket-powered presence.",
    stack: ["React", "Socket.io", "Express"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

function ProjectsPage() {
  return (
    <Reveal className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built recently."
        description="A selection of projects that capture how I think about UI, performance, and product."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="reveal group relative flex flex-col rounded-2xl border border-border bg-surface p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              aria-hidden
            />

            <h3 className="font-display text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-surface-elevated px-2.5 py-1 text-xs font-mono text-primary"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3.5 py-2 text-xs font-semibold transition-all hover:border-primary/60 hover:text-primary"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-all hover:shadow-glow"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
