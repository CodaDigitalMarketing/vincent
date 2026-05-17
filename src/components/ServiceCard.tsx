import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index: number;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  index,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group card-light rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-${(index + 1) * 100}`}
    >
      <div className="w-12 h-12 rounded-xl bg-ice flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-charcoal mb-3">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-charcoal transition-colors">
        Learn more
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="group-hover:translate-x-1 transition-transform"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </Link>
  );
}
