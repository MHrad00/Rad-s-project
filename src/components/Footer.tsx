import { Github, Linkedin, Facebook, Mail } from "lucide-react";

/** Simple footer with social links. */
export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sk Md Mounuden Hassn Rad. Crafted with care in Khulna.
        </p>
        <div className="flex items-center gap-3">
          <SocialIcon href="https://github.com" label="GitHub">
            <Github className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="https://facebook.com" label="Facebook">
            <Facebook className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="mailto:hello@example.com" label="Email">
            <Mail className="h-4 w-4" />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-all hover:text-primary hover:border-primary/50 hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
