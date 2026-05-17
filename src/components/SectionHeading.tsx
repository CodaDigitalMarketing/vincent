interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
          {label}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] leading-tight ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg max-w-2xl leading-relaxed mx-auto ${dark ? "text-slate-blue" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
