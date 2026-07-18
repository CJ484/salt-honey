'use client';
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSection() {
  const brownFilter = 'brightness(0) saturate(100%) invert(24%) sepia(5%) saturate(3131%) hue-rotate(317deg) brightness(94%) contrast(89%)';
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const stage = sectionRef.current?.querySelector<HTMLElement>(
        "[data-hero-stage]",
      );

      if (!stage) return;

      // ScrollSmoother transforms the page content, so GSAP handles pinning
      // instead of relying on CSS sticky inside a transformed ancestor.
      gsap.set(stage, { position: "relative", top: "auto" });

      const timeline = gsap.timeline({
        defaults: { duration: 1.1, ease: "power3.out" },
      });

      timeline
        .fromTo(
          "[data-hero-pour]",
          {
            autoAlpha: 0,
            scale: 1.08,
            clipPath: "inset(8% 8% 8% 8%)",
          },
          {
            autoAlpha: 1,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
          },
          0.1,
        )
        .fromTo(
          "[data-main-logo='back']",
          { autoAlpha: 0, x: 70, y: -20 },
          { autoAlpha: 1, x: 0, y: 0 },
          0.35,
        )
        .fromTo(
          "[data-main-logo='front']",
          { autoAlpha: 0, x: 110 },
          { autoAlpha: 1, x: 0 },
          0.48,
        )
        .fromTo(
          "[data-ny-logo='back']",
          { autoAlpha: 0, x: -70, y: 20 },
          { autoAlpha: 1, x: 0, y: 0 },
          0.55,
        )
        .fromTo(
          "[data-ny-logo='front']",
          { autoAlpha: 0, x: -110 },
          { autoAlpha: 1, x: 0 },
          0.68,
        );

      gsap.timeline({
        defaults: {
          duration: 1.4,
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stage,
          pinSpacing: false,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
        .to("[data-main-group='front']", {
          x: "18vw",
          y: "-18vh",
          autoAlpha: 0,
          ease: "power2.in",
        }, 0)
        .to("[data-main-group='back']", {
          x: "12vw",
          y: "-12vh",
          autoAlpha: 0,
          ease: "power2.in",
        }, 0)
        .to("[data-ny-group='front']", {
          x: "-18vw",
          y: "18vh",
          autoAlpha: 0,
          ease: "power2.in",
        }, 0)
        .to("[data-ny-group='back']", {
          x: "-12vw",
          y: "12vh",
          autoAlpha: 0,
          ease: "power2.in",
        }, 0)
        .to("[data-hero-pour]", {
          autoAlpha: 0,
          scale: 1.03,
          duration: 2.2,
          ease: "none",
        }, 0.25);
    });

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-[180svh] bg-radial-[at_50%_75%] from-sage to-white">
      <div data-hero-stage className="sticky top-0 h-[100svh] overflow-hidden">
        <div
          data-hero-pattern
          style={{
            backgroundImage: "url('/svg/pattern-background.svg')",
            backgroundPosition: "top center",
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
          }}
          className="absolute top-0 left-0 w-full h-full z-1 opacity-5"
        />
        <div data-hero-front className="mx-auto absolute inset-0 min-h-[100svh] z-3">
          {/* Main Letter Logo */}
          <div
            data-main-group="front"
            className="absolute right-[-6vw] top-[12svh] w-[90vw] sm:right-0 sm:top-[8svh] sm:w-[75vw] md:right-10 md:top-0 md:w-[50vw]"
          >


            {/* Front copy: white */}
            <Image data-main-logo="front" src="/svg/main-letter-logo-transparent.svg" alt="Main Letter Logo" width={100} height={100} style={{ filter: brownFilter, }} className="absolute left-0 top-0 z-4 aspect-[16/9] w-full" />
          </div>
          {/* Coffee Pour */}

          {/* New York Logo */}
          <div data-ny-group="front" className="absolute bottom-0 left-10 w-[calc(100vw/2)]">

            {/* Front copy: white */}
            <Image data-ny-logo="front" src="/svg/new-york-logo-transparent.svg" alt="New York Logo" width={100} height={100} style={{ filter: brownFilter, }} className="aspect-[16/9] w-[calc(100vw/2)] absolute bottom-0 left-50 z-4" />
          </div>
        </div>

        <Image data-hero-pour src="/images/male-s-hand-pouring-dark-liquid-into-glass-held-by-female-with-white-background.png" alt="Coffee Pour" fill priority sizes="100vw" className="absolute top-10 right-0 object-cover z-2" />
        <div data-hero-back className="mx-auto absolute inset-0 min-h-[100svh] z-1">
          {/* Back copy: tinted, offset down-right for depth */}
          <div
            data-main-group="back"
            className="absolute right-[-6vw] top-[12svh] w-[90vw] sm:right-0 sm:top-[8svh] sm:w-[75vw] md:right-10 md:top-0 md:w-[50vw]"
          >
            <Image
              src="/svg/main-letter-logo.svg"
              alt=""
              aria-hidden
              width={100}
              height={100}
              data-main-logo="back"
              style={{
                filter: brownFilter,
              }}
              className="absolute left-0 top-0 z-2 aspect-[16/9] w-full"
            />
          </div>
          <div data-ny-group="back" className="absolute bottom-0 left-10 w-[calc(100vw/2)]">

          <Image data-ny-logo="back" src="/svg/new-york-logo.svg" alt="" aria-hidden width={100} height={100} style={{ filter: brownFilter, }} className="aspect-[16/9] w-[calc(100vw/2)] absolute bottom-0 left-50 z-2" />
          </div>
          {/* Back copy: tinted, offset down-right for depth */}
        </div>
      </div>
    </section>
  );
}
