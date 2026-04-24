/**
 * Reusable section heading with a small eyebrow tag and gradient title.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass} mb-12`}>
      {eyebrow && (
        <span className="reveal inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="reveal mt-4 text-3xl md:text-5xl font-bold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="reveal mt-4 text-base md:text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
