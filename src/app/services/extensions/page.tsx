"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const designPrinciples = [
  "Light-Filled Architecture",
  "Modern London Living",
  "A Focus on Quality",
  "Seamless Integration",
  "Bespoke Craftsmanship",
  "Architectural Excellence",
];

const extensionTypes = [
  {
    title: "Loft Conversion (Dormer)",
    cost: "£55,000 to £120,000",
    buildTime: "8 to 12 Weeks",
    route: "GPDO / Permitted Dev",
    valueAdded: "15-20%",
    image: "/images/portfolio-1.jpg",
    benefits: [
      "Space without Sacrifice: Create a luxury master suite without losing an inch of your garden.",
      "Minimal Disruption: Most work is scaffold-based and external, keeping your home life peaceful.",
      "Highest ROI: Statistically the best way to increase a London property's market value.",
    ],
  },
  {
    title: "Side Return Extension",
    cost: "£55,000 to £90,000",
    buildTime: "10 to 14 Weeks",
    route: "Full Planning / GPDO",
    valueAdded: "5-10%",
    image: "/images/portfolio-2.jpg",
    benefits: [
      "Unlocks Dead Space: Transforms narrow, unused alleyways into expansive living areas.",
      "Kitchen Transformation: Ideal for Victorian terraces to create that sought-after kitchen island layout.",
      "Light Filled: Perfect for glass roof features that bring natural light into the core of the house.",
    ],
  },
  {
    title: "Two Storey Rear Extension",
    cost: "£110,000 to £290,000",
    buildTime: "16 to 24 Weeks",
    route: "Full Planning",
    valueAdded: "15-20%",
    image: "/images/portfolio-3.jpg",
    benefits: [
      "Double the Impact: Add both a massive kitchen/diner and an extra bedroom with ensuite upstairs.",
      "Cost Effective: Lower cost per square metre compared to building two separate extensions.",
      "The 'Forever Home' Fix: The ultimate solution for growing families who don't want to move.",
    ],
  },
  {
    title: "Single Storey Rear Extension",
    cost: "£60,000 to £135,000",
    buildTime: "10 to 16 Weeks",
    route: "GPDO / Permitted Dev",
    valueAdded: "10-15%",
    image: "/images/portfolio-4.jpg",
    benefits: [
      "Indoor Outdoor Living: Perfectly designed for bifold doors and seamless garden integration.",
      "Open Plan Living: Removes cramped internal walls to create a modern, social heart of the home.",
      "Fast Approval: Many designs qualify for Prior Notification, avoiding the lengthy full planning process.",
    ],
  },
];

const testimonials = [
  {
    name: "Marcus T.",
    location: "Greenwich",
    quote:
      "VPR's efficiency is unmatched. The team finished our extension ahead of schedule with zero fuss.",
  },
  {
    name: "Sophie L.",
    location: "Chelsea",
    quote:
      "The brick matching is seamless. Vincent delivered a stunning extension that perfectly respects our home's period character.",
  },
  {
    name: "Robert H.",
    location: "Richmond",
    quote:
      "Professional and reliable. Vincent's team transformed our space while staying perfectly on budget.",
  },
  {
    name: "Eleanor S.",
    location: "Sutton",
    quote:
      "Vincent and his team transformed our terrace. We had three offers over the asking price within 48 hours.",
  },
  {
    name: "Mark S.",
    location: "Croydon",
    quote:
      "Vincent is Good and easy to work with",
  },
];

const comparisonData = [
  { type: "Loft Dormer", cost: "£55k to £120k", time: "8 to 12 wks", value: "15 to 20%" },
  { type: "Side Return", cost: "£55k to £90k", time: "10 to 14 wks", value: "5 to 10%" },
  { type: "Two Storey", cost: "£110k to £290k", time: "16 to 24 wks", value: "15 to 20%" },
  { type: "Single Storey", cost: "£60k to £135k", time: "10 to 16 wks", value: "10 to 15%" },
];

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden select-none">
      {/* After image (full) */}
      <Image
        src="/images/dormer-after.jpg"
        alt="After renovation"
        fill
        className="object-cover"
      />
      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src="/images/dormer-before.jpg"
          alt="Before renovation"
          fill
          className="object-cover"
        />
      </div>
      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1d233c" strokeWidth="2">
            <path d="M7 4l-4 6 4 6M13 4l4 6-4 6" />
          </svg>
        </div>
      </div>
      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-charcoal/70 text-white text-xs font-medium backdrop-blur-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-charcoal/70 text-white text-xs font-medium backdrop-blur-sm">
        After
      </div>
      {/* Invisible range input */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Before/after comparison slider"
      />
    </div>
  );
}

function TestimonialsCarousel({ testimonials }: { testimonials: { name: string; location: string; quote: string }[] }) {
  // Duplicate testimonials for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 md:py-32 bg-ice/50 overflow-hidden">
      <style>{`
        @keyframes testimonialScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-6 mb-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
            What Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal">
            Testimonials
          </h2>
        </div>
      </div>

      <div className="relative">
        <div
          className="flex gap-6"
          style={{
            width: "max-content",
            animation: "testimonialScroll 35s linear infinite",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {doubled.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="card-light rounded-2xl p-8 w-[340px] md:w-[420px] h-[220px] flex-shrink-0 flex flex-col"
            >
              <p className="text-muted leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-4">
                <p className="text-charcoal font-medium text-sm">{t.name}</p>
                <p className="text-muted text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ExtensionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden grain bg-charcoal">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/extensions-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-4 animate-fade-in-up">
            Services
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight animate-fade-in-up delay-100">
            House Extensions
          </h1>
        </div>
      </section>

      {/* Economics of Space — light */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
                The Investment
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal leading-tight mb-6">
                The Economics
                <br />
                of Space
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                In the London property market, square footage is the primary
                currency of value. An extension is rarely an
                &lsquo;expense&rsquo;; it is a strategic asset
                reallocation. Because the capital&apos;s demand for residential
                volume far outstrips supply, the market value of a newly
                created room consistently eclipses the cost of its
                construction.
              </p>
              <p className="text-muted leading-relaxed">
                We don&apos;t just build extensions; we engineer equity. Our
                architectural approach focuses on the &lsquo;Value-Add
                Delta&rsquo;&mdash;ensuring that every pound invested in
                high-spec construction yields a disproportionate return in your
                home&apos;s total market valuation.
              </p>
            </div>

            {/* Case study card */}
            <div className="card-light rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-blue mb-6">
                Case Study
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-charcoal/5">
                  <span className="text-sm text-muted">Asset Entry Value</span>
                  <span className="text-lg font-semibold text-charcoal">£750,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-charcoal/5">
                  <span className="text-sm text-muted">Strategic Investment</span>
                  <span className="text-lg font-semibold text-charcoal">£70,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-charcoal/5">
                  <span className="text-sm text-muted">Post-Build Valuation</span>
                  <span className="text-lg font-semibold text-charcoal">£900,000</span>
                </div>
                <div className="pt-4">
                  <p
                    className="text-2xl font-bold font-[family-name:var(--font-poppins)]"
                    style={{
                      background: "linear-gradient(90deg, #2d8a4e 0%, #2d8a4e 40%, #6ee7a0 50%, #2d8a4e 60%, #2d8a4e 100%)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation: "shimmer 8s ease-in-out infinite",
                    }}
                  >
                    +£80,000 Net Equity
                  </p>
                  <p className="text-sm text-muted mt-1">
                    Yield Analysis: A 214% Return on Investment (ROI) on
                    construction capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 md:py-32 bg-ice/50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal mb-4">
              Design Philosophy
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Every extension we build is guided by six core principles that
              ensure your new space feels intentional, not added on.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {designPrinciples.map((principle, i) => (
              <div
                key={principle}
                className="card-light rounded-2xl p-8 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-slate-blue/40 font-[family-name:var(--font-poppins)] mb-3">
                  0{i + 1}
                </div>
                <p className="text-sm font-semibold text-charcoal">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extension Types with Portfolio Images */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
              Options
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal">
              Extension Types
            </h2>
          </div>

          <div className="space-y-8">
            {extensionTypes.map((ext, i) => (
              <div key={ext.title} className="card-light rounded-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="relative lg:w-2/5 aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={ext.image}
                      alt={ext.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="lg:w-3/5 p-8">
                    <h3 className="text-xl font-semibold font-[family-name:var(--font-poppins)] text-charcoal mb-4">
                      {ext.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm mb-6">
                      <div>
                        <span className="text-muted">Est. Cost</span>
                        <p className="text-charcoal font-medium">{ext.cost}</p>
                      </div>
                      <div>
                        <span className="text-muted">Build Time</span>
                        <p className="text-charcoal font-medium">{ext.buildTime}</p>
                      </div>
                      <div>
                        <span className="text-muted">Route</span>
                        <p className="text-charcoal font-medium">{ext.route}</p>
                      </div>
                      <div>
                        <span className="text-muted">Value Added</span>
                        <p className="text-charcoal font-medium">{ext.valueAdded}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {ext.benefits.map((benefit) => {
                        const colonIdx = benefit.indexOf(":");
                        const label = colonIdx > -1 ? benefit.slice(0, colonIdx + 1) : "";
                        const rest = colonIdx > -1 ? benefit.slice(colonIdx + 1) : benefit;
                        return (
                          <li key={benefit} className="flex gap-3 text-sm">
                            <span className="text-navy mt-1 shrink-0">&#10003;</span>
                            <span className="text-muted leading-relaxed">
                              {label && <strong className="text-charcoal">{label}</strong>}
                              {rest}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
              At a Glance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal">
              Quick Comparison
            </h2>
          </div>

          <div className="card-light rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ice">
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-blue">
                    Type
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-blue">
                    London Cost
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-blue hidden sm:table-cell">
                    Timeframe
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-blue">
                    Value Added
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.type} className="border-b border-ice/50 last:border-0">
                    <td className="px-6 py-4 text-charcoal font-medium">{row.type}</td>
                    <td className="px-6 py-4 text-muted">{row.cost}</td>
                    <td className="px-6 py-4 text-muted hidden sm:table-cell">{row.time}</td>
                    <td className="px-6 py-4 text-charcoal font-medium">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
              Transformation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal">
              Before &amp; After
            </h2>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal mb-4">
            Your home has hidden potential
          </h2>
          <p className="text-muted text-lg mb-10">
            We&apos;re here to unlock it. Get in contact with us today.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-charcoal text-white font-semibold rounded-xl hover:bg-navy transition-colors text-sm uppercase tracking-wider"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
