"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services/extensions", label: "Extensions" },
  { href: "/services/furniture-sourcing", label: "Furniture Sourcing" },
  { href: "/services/refurbishments", label: "Refurbishments" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav
          className={`rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-sm"
              : "bg-charcoal/40 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.webp"
              alt="VPR Limited"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex items-baseline gap-2">
              <span
                className={`text-2xl font-bold tracking-tight font-[family-name:var(--font-poppins)] transition-colors ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                VPR
              </span>
              <span
                className={`hidden sm:inline text-sm font-light tracking-widest uppercase transition-colors ${
                  scrolled ? "text-muted" : "text-white/60"
                }`}
              >
                Limited
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? pathname === link.href
                      ? "text-charcoal bg-charcoal/5"
                      : "text-muted hover:text-charcoal hover:bg-charcoal/5"
                    : pathname === link.href
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-muted hover:text-charcoal" : "text-white/60 hover:text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-1 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "text-charcoal bg-charcoal/5"
                    : "text-muted hover:text-charcoal hover:bg-charcoal/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
