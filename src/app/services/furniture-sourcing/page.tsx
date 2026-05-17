import Link from "next/link";

const supplyChain = [
  { step: "1", label: "The Factory", detail: "Raw Cost" },
  { step: "2", label: "The Exporter", detail: "+30% Markup" },
  { step: "3", label: "UK Brand / Wholesaler", detail: "+50% Markup" },
  { step: "4", label: "Retail Showroom", detail: "+40% Markup" },
  { step: "5", label: "The Customer (You)", detail: "Factory Direct Price" },
];

const priceComparison = [
  { category: "Bespoke Kitchen", retail: "£45,000", vpr: "£16,500", saving: "63%" },
  { category: "Marble / Sintered Stone", retail: "£8,500", vpr: "£3,200", saving: "62%" },
  { category: "Designer Lighting / FF&E", retail: "£12,000", vpr: "£4,500", saving: "62%" },
  { category: "Custom Joinery", retail: "£15,000", vpr: "£6,000", saving: "60%" },
];

export default function FurnitureSourcingPage() {
  return (
    <>
      {/* Hero with video */}
      <section className="relative pt-40 pb-24 overflow-hidden grain bg-charcoal">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/sourcing-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-4 animate-fade-in-up">
            Services
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight animate-fade-in-up delay-100">
            China Furniture
            <br />
            Sourcing
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-2xl max-w-2xl animate-fade-in-up delay-200 font-light">
            Don&apos;t pay a 300% markup on your kitchen or bathroom.
          </p>
        </div>
      </section>

      {/* The British Brand Myth */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
            The Truth
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal mb-8">
            The &lsquo;British&rsquo; Brand Myth
          </h2>

          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Most people don&apos;t realize that the &lsquo;British&rsquo;
              furniture and kitchen brands they trust, names like{" "}
              <strong className="text-charcoal">
                Howdens, Wren, Magnet, or B&amp;Q
              </strong>
              , mostly rely on Chinese suppliers and manufacturers. When you
              buy from a UK retailer, you aren&apos;t just paying for wood and
              stone; you are paying for their massive showrooms, national
              advertising, and executive bonuses.
            </p>
            <p>
              At <strong className="text-charcoal">VPR</strong>, we&apos;ve
              cut the middleman out. By working directly with the vetted
              factories in China that manufacture for global luxury brands, we
              bring you the exact same quality and materials at a fraction of
              the high street cost.
            </p>
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="py-24 md:py-32 bg-ice/50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
              The Markup Chain
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal mb-4">
              Where Your Money Goes
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              In the traditional model, a product travels through five
              different hands before it reaches your home. Each step adds a
              30% to 50% markup.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {supplyChain.map((item) => (
              <div
                key={item.step}
                className="card-light rounded-xl px-6 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-slate-blue w-6">
                    {item.step}
                  </span>
                  <span className="text-charcoal font-medium">
                    {item.label}
                  </span>
                </div>
                <span className="text-muted text-sm">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Send us a photo */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-poppins)] text-charcoal mb-6">
              Found something you love?
            </h2>
            <p className="text-muted leading-relaxed max-w-2xl mx-auto mb-4">
              If you have your heart set on a specific style, a designer
              piece, or a high end finish you saw in a Wren, Howdens, or
              Magnet showroom, don&apos;t pay the retail markup just yet.
            </p>
            <p className="text-muted leading-relaxed max-w-2xl mx-auto">
              Send us a photo, a link, or a specification. Whether it&apos;s a
              £5,000 modular sofa, a £3,000 stone resin bathtub, or a bespoke
              kitchen layout, we will leverage our direct factory network to
              find the identical, or superior, version at the source.
            </p>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-24 md:py-32 bg-ice/50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-blue mb-4">
              The Numbers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal">
              The Factory to Floor Edge
            </h2>
          </div>

          <div className="card-light rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ice">
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-blue">
                    Category
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-blue">
                    UK Retail
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-blue">
                    VPR Sourcing
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-blue hidden sm:table-cell">
                    Saving
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((row) => (
                  <tr
                    key={row.category}
                    className="border-b border-ice/50 last:border-0"
                  >
                    <td className="px-6 py-4 text-charcoal font-medium">
                      {row.category}
                    </td>
                    <td className="px-6 py-4 text-muted line-through">
                      {row.retail}
                    </td>
                    <td className="px-6 py-4 text-charcoal font-semibold">
                      {row.vpr}
                    </td>
                    <td className="px-6 py-4 text-charcoal font-semibold hidden sm:table-cell">
                      {row.saving}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-6 py-3 text-xs text-muted border-t border-ice/50">
              Prices include shipping &amp; quality inspection by our China
              based agents.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-charcoal mb-6">
            Stop Paying the Markup
          </h2>
          <p className="text-muted text-lg mb-10">
            Send us a photo, link, or spec and we&apos;ll find it at source.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-charcoal text-white font-semibold rounded-xl hover:bg-navy transition-colors text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
