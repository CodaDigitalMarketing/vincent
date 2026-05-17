"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden grain bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-charcoal" />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-4 animate-fade-in-up">
            Contact
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-poppins)] text-white leading-tight animate-fade-in-up delay-100">
            Contact Us
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-xl animate-fade-in-up delay-200">
            Tell us about your project and we&apos;ll get back to you promptly.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-blue mb-3">
                  Email
                </h3>
                <a
                  href="mailto:property@vprlimited.co.uk"
                  className="text-charcoal hover:text-navy transition-colors"
                >
                  property@vprlimited.co.uk
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-blue mb-3">
                  Location
                </h3>
                <p className="text-muted">London, United Kingdom</p>
              </div>

            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="card-light rounded-2xl p-12 text-center">
                  <div className="text-4xl mb-4 text-navy">&#10003;</div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-charcoal mb-2">
                    Thank You
                  </h3>
                  <p className="text-muted">
                    We&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-slate-blue mb-2">
                      Name
                    </label>
                    <input type="text" id="name" name="name" required className="w-full bg-ice/70 border-none rounded-xl px-4 py-3 text-charcoal placeholder-muted/40 focus:outline-none focus:ring-2 focus:ring-slate-blue/20 transition-all" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-slate-blue mb-2">
                      Email
                    </label>
                    <input type="email" id="email" name="email" required className="w-full bg-ice/70 border-none rounded-xl px-4 py-3 text-charcoal placeholder-muted/40 focus:outline-none focus:ring-2 focus:ring-slate-blue/20 transition-all" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-slate-blue mb-2">
                      Message
                    </label>
                    <textarea id="message" name="message" required rows={5} className="w-full bg-ice/70 border-none rounded-xl px-4 py-3 text-charcoal placeholder-muted/40 focus:outline-none focus:ring-2 focus:ring-slate-blue/20 transition-all resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-charcoal text-white font-semibold rounded-xl hover:bg-navy transition-colors text-sm uppercase tracking-wider">
                    SEND
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
