import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/logo.webp"
                alt="VPR Limited"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-white">
                VPR
              </h3>
            </div>
            <p className="text-slate-blue text-sm leading-relaxed max-w-xs">
              Vincent Property Renovation
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-blue mb-4">
              Services
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/services/extensions"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                House Extensions
              </Link>
              <Link
                href="/services/refurbishments"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Home Refurbs and Cleaning
              </Link>
              <Link
                href="/services/furniture-sourcing"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                China Furniture Sourcing
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-blue mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:property@vprlimited.co.uk"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                property@vprlimited.co.uk
              </a>
              <Link
                href="/contact"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} VPR Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
