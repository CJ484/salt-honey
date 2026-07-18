"use client";

import { FadeUp } from "@/components/index";

const HIGHLIGHTS = [
  { label: "Years in Coffee", value: "12+" },
  { label: "Home", value: "Long Island" },
  { label: "Opening", value: "July 2026" },
];

export default function AboutOwnerSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-sage/20 px-4 py-20 text-foreground-brand sm:px-6 sm:py-24 md:px-12 md:py-48">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] -translate-x-1/4 translate-y-1/3 rounded-full bg-interior/5 blur-3xl sm:h-[600px] sm:w-[600px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 md:flex-row-reverse md:gap-16 lg:gap-20">
        <div className="w-full md:w-1/2">
          <FadeUp>
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="w-8 h-[1px] bg-wood" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-wood sm:text-xs sm:tracking-[0.3em]">
                About the Owner
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="mb-6 font-heading text-4xl leading-[1.08] text-foreground-brand sm:text-5xl md:mb-8 md:text-6xl">
              Built from a love of <span className="italic text-interior">slow mornings.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mb-5 text-base font-light leading-relaxed text-foreground-brand/75 sm:mb-6 sm:text-lg">
              Salt & Honey began as a simple idea: create a cafe in Sea Cliff that feels as intentional as the
              first cup of the day. After years working in specialty coffee and hospitality across New York,
              our founder returned to the North Shore with a clear vision—a warmly designed space where craft,
              community, and calm could meet.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="mb-8 text-base font-light leading-relaxed text-foreground-brand/75 sm:mb-10 sm:text-lg">
              Every recipe, material, and detail in the shop reflects that belief. From the wood-slatted walls
              to the salted honey latte on the menu, the cafe is a personal invitation to pause, connect, and
              savor something made with care.
            </p>
          </FadeUp>
          <FadeUp delay={400}>
            <blockquote className="border-l-2 border-interior pl-4 sm:pl-6">
              <p className="mb-4 font-heading text-xl italic leading-snug text-foreground-brand sm:text-2xl md:text-3xl">
                &ldquo;I wanted a place where neighbors could feel at home before the day even started.&rdquo;
              </p>
              <cite className="text-xs font-medium not-italic uppercase tracking-[0.16em] text-wood sm:text-sm sm:tracking-[0.2em]">
                — Founder, Salt & Honey
              </cite>
            </blockquote>
          </FadeUp>
        </div>

        <div className="relative h-[460px] w-full sm:h-[520px] md:h-[580px] md:w-1/2 lg:h-[620px]">
          <FadeUp delay={200} className="absolute left-0 top-0 z-10 h-[320px] w-[88%] sm:h-[390px] sm:w-[78%] md:h-[420px] md:w-[70%]">
            <div className="h-full overflow-hidden bg-interior group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Salt & Honey founder"
                className="h-full w-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </FadeUp>
          <FadeUp delay={400} className="absolute bottom-0 right-0 z-20 w-[88%] sm:w-[72%] md:w-[62%] lg:w-[55%]">
            <div className="border border-sage-light bg-exterior p-5 shadow-2xl sm:p-6 lg:p-8">
              <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-wood sm:mb-6 sm:text-xs sm:tracking-[0.3em]">
                At a Glance
              </p>
              <div className="space-y-3 sm:space-y-5">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-3 border-b border-sage-light pb-3 last:border-0 last:pb-0 sm:gap-4 sm:pb-4">
                    <span className="text-xs font-light text-muted-foreground sm:text-sm">{item.label}</span>
                    <span className="font-heading text-lg text-foreground-brand sm:text-xl">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
