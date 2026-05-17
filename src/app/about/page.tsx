import Image from "next/image";
import Link from "next/link";

const strengths = [
  {
    title: "Momentum",
    description:
      "We operate with the urgency of a high speed infrastructure project. No idle crews, no wasted days.",
  },
  {
    title: "Skillset",
    description:
      "Technical mastery refined in large scale, high precision markets. Every trade is a specialist.",
  },
  {
    title: "Result",
    description:
      "Faster handovers and superior structural integrity without bloat. Quality you can see and feel.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden grain bg-charcoal">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/about-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal" />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-4 animate-fade-in-up">
            About VPR
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight animate-fade-in-up delay-100">
            Who We Are
          </h1>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
                The Story
              </p>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-poppins)] text-charcoal mb-6">
                Built from
                <br />
                Necessity
              </h2>
              <div className="space-y-6">
                <p className="text-muted leading-relaxed text-lg">
                  Every great project begins with a problem that feels impossible
                  to solve. For Vincent, that problem was the London housing
                  market. Facing a city where &lsquo;affordable&rsquo; was a myth
                  and standard entry points were out of reach, Vincent looked at
                  the landscape through a different lens.
                </p>
                <p className="text-muted leading-relaxed">
                  If he couldn&apos;t buy a home that was already built, he would
                  simply have to build one himself. By rebuilding these structures
                  from the ground up while residing in them, he mastered every
                  facet of renovation through direct, first principles experience.
                </p>
              </div>
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

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-ice/50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
              The Philosophy
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-charcoal mb-6">
              Eliminating Inefficiency
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Standard construction culture is often defined by low momentum and
              excessive downtime. Vincent&apos;s approach is the antithesis of
              the British &lsquo;tea break&rsquo; mentality. Having lived
              through his own builds, he understands that every hour of delay is
              a direct cost to the client.
            </p>
          </div>

          {/* The Edge: Chinese Speed & Precision — dark contrast card */}
          <div className="mt-16 bg-[#3a4d6e] rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                The Edge
              </p>
              <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] text-white mb-4">
                Chinese Speed &amp; Precision
              </h3>
              <p className="text-white max-w-2xl mx-auto leading-relaxed">
                We don&apos;t use standard crews. Vincent hand selected a team of
                builders with extensive experience in the Chinese construction
                market, the fastest and most demanding building environment in the
                world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/15 rounded-xl p-6"
                >
                  <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-2">
                    {item.title}
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-charcoal/70 leading-relaxed italic">
            &ldquo;We don&apos;t just renovate; we execute with
            precision.&rdquo;
          </blockquote>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-charcoal text-white font-semibold rounded-xl hover:bg-navy transition-colors text-sm"
            >
              Get Started
            </Link>
            <Link
              href="/services/extensions"
              className="inline-block px-10 py-4 bg-ice text-charcoal font-semibold rounded-xl hover:bg-light-blue/30 transition-colors text-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
