import Link from "next/link";

const services = [
  {
    title: "Full Property Refurbishment",
    description:
      "End to end renovation of entire properties. Structural changes, rewiring, replumbing, and complete interior redesign.",
  },
  {
    title: "Kitchen Fitting",
    description:
      "Custom kitchen installations from layout design to final finishing. Worktops, cabinetry, appliances, and tiling.",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Complete bathroom overhauls including plumbing, waterproofing, tiling, and fixture installation.",
  },
  {
    title: "Flooring and Finishing",
    description:
      "Hardwood, engineered wood, tile, and luxury vinyl installations. Precision fitting with flawless transitions.",
  },
  {
    title: "Painting and Decorating",
    description:
      "Interior and exterior painting, wallpapering, and specialist finishes to give your property a polished look.",
  },
  {
    title: "Deep Cleaning",
    description:
      "Post renovation deep cleans and ongoing property maintenance. Move in ready results every time.",
  },
];

export default function RefurbishmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden grain bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-charcoal" />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-4 animate-fade-in-up">
            Services
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight animate-fade-in-up delay-100">
            Home Refurbs
            <br />
            and Cleaning
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-2xl animate-fade-in-up delay-200">
            Complete interior transformations and professional cleaning
            services, delivered with speed and precision.
          </p>
        </div>
      </section>

      {/* Content with capacity overlay */}
      <section className="relative">
        {/* Services grid (blurred behind overlay) */}
        <div className="py-24 md:py-32 bg-white">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 blur-[1px] opacity-50 select-none pointer-events-none">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="card-light rounded-2xl p-8"
                >
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-poppins)] text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="mx-6 max-w-lg text-center bg-white/95 backdrop-blur-sm rounded-2xl p-10 md:p-14 shadow-lg">
            <div className="w-14 h-14 rounded-full bg-charcoal/5 flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-charcoal/60">
                <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-charcoal text-lg md:text-xl font-medium leading-relaxed">
              Due to currently being at full capacity, Vincent and his team are
              unable to take on new small scale works at this time.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-charcoal text-white font-semibold rounded-xl hover:bg-navy transition-colors text-sm"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
