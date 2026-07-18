"use client";

import { ArrowRight } from "lucide-react";
import { FadeUp, ShinyText } from "@/components/index";

export default function PhilosophySection() {
  const backgroundImage = "/images/tile-texture.png";
  return (
    <section id="philosophy" className="z-10 shadow-[0_-24px_48px_-16px_rgba(61,43,31,0.25),0_24px_48px_-16px_rgba(61,43,31,0.25)] py-32 md:py-48 px-6 md:px-12 bg-sage-light/20 backdrop-brightness-90 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="backdrop-blur-xs bg-on-interior/50 p-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 relative z-10">
        <div className="w-full md:w-1/2">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-wood"></span>
              <span className="text-wood uppercase tracking-[0.3em] text-xs font-semibold">Our Philosophy</span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-[1.1]">
              We believe the morning ritual should be <ShinyText className="italic" speed={2.5} color="#4a5539" text="Beautiful." />
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-medium">
              It&apos;s more than just caffeine. It&apos;s the sound of the espresso machine pulling a perfect shot,
              the warmth of the wood paneling, and the quiet moment you take before the day truly begins.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-medium">
              At Salt & Honey, every detail—from our glossy stacked tile counter to our carefully sourced
              single-origin beans—is designed to give Sea Cliff a space worth slowing down for.
            </p>
          </FadeUp>
          <FadeUp delay={400}>
            <a
              href="#menu"
              className="inline-flex items-center group text-foreground-brand text-sm uppercase tracking-[0.2em] font-medium border-b border-foreground-brand pb-2 hover:text-foreground-brand/50 hover:border-foreground-brand/50 transition-all duration-300"
            >
              Explore Our Menu
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </FadeUp>
        </div>

        <div className="w-full md:w-1/2 relative h-[400px] lg:h-[600px]">
          <FadeUp delay={200} className="absolute top-0 right-0 w-3/4 z-10">
            <div className="bg-interior overflow-hidden group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800"
                alt="Coffee brewing"
                className="aspect-square object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </FadeUp>
          <FadeUp delay={400} className="absolute bottom-0 left-0 w-[60%] z-20">
            <div className="bg-sage p-2 bg-exterior shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800"
                alt="Latte Art"
                className="aspect-square object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
