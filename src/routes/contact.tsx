import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Facebook, Mail, Send, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sk Md Mounuden Hassn Rad" },
      {
        name: "description",
        content:
          "Get in touch with Sk Md Mounuden Hassn Rad — open to internships and freelance work.",
      },
      { property: "og:title", content: "Contact — Sk Md Mounuden Hassn Rad" },
      {
        property: "og:description",
        content: "Let's build something great together.",
      },
    ],
  }),
  component: ContactPage,
});

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  // Local-only handler: shows a success state. Wire to your backend later.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    e.currentTarget.reset();
  };

  return (
    <Reveal className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        description="Have a project, internship opportunity, or just want to say hi? Drop a message — I reply quickly."
      />

      <div className="grid gap-8 md:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal md:col-span-3 rounded-2xl border border-border bg-surface p-7 shadow-card space-y-5"
        >
          <Field label="Name" id="name">
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
            />
          </Field>
          <Field label="Email" id="email">
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
            />
          </Field>
          <Field label="Message" id="message">
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me a little about your idea…"
              className="w-full rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={sent}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow hover:-translate-y-0.5 disabled:opacity-80"
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" />
                Message sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Sidebar */}
        <aside className="reveal md:col-span-2 rounded-2xl border-gradient p-7 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold">Find me online</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Quickest replies are via email or LinkedIn.
            </p>
            <ul className="mt-6 space-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium transition-all hover:border-primary/60 hover:-translate-y-0.5"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span className="text-foreground/90 group-hover:text-foreground">
                      {s.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Based in Shib Bari, Khulna · Bangladesh
          </p>
        </aside>
      </div>
    </Reveal>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
