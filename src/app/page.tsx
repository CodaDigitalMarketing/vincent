import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "House Extensions",
    description:
      "Expand your living space with precision engineered extensions designed around your lifestyle, delivered on time and built to last.",
    href: "/services/extensions",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 21V9l9-7 9 7v12a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: "China Furniture Sourcing",
    description:
      "Direct access to vetted factories in China that manufacture for global luxury brands, at a fraction of the high street cost.",
    href: "/services/furniture-sourcing",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
  },
  {
    title: "Home Refurbs and Cleaning",
    description:
      "Complete property refurbishments and professional cleaning services. No downtime, no excuses.",
    href: "/services/refurbishments",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain bg-charcoal">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-32 pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-8 animate-fade-in-up">
            Property Renovation &middot; London
          </p>

          <div className="animate-fade-in-up delay-100 mb-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold font-[family-name:var(--font-poppins)] text-shimmer leading-[0.9]">
              VPR
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide animate-fade-in-up delay-200">
            Vincent Property Renovation
          </p>

          <p className="mt-6 text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            We don&apos;t just renovate; we execute with precision.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Link
              href="/services/extensions"
              className="px-8 py-3.5 bg-white text-charcoal font-semibold rounded-xl hover:bg-ice transition-colors text-sm"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] text-charcoal">
              Services
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-ice/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
                Our Edge
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] text-charcoal leading-tight mb-6">
                Eliminating
                <br />
                Inefficiency
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Standard construction culture is often defined by low momentum
                and excessive downtime. Vincent&apos;s approach is the antithesis
                of the British &lsquo;tea break&rsquo; mentality. Having lived
                through his own builds, he understands that every hour of delay
                is a direct cost to the client.
              </p>
              <p className="text-muted leading-relaxed">
                Our crews bring the urgency and precision of high speed
                infrastructure projects. Technical mastery refined in
                large scale, high precision markets means faster handovers and
                superior structural integrity, without the bloat.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/construction.jpg"
                alt="VPR construction project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-charcoal mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back to you with a
            plan tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-charcoal text-white font-semibold rounded-xl hover:bg-navy transition-colors text-sm"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
