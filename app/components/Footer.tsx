"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { FadeUp } from "@/components/index";
import { SOCIAL_LINKS, LINKS } from "@/lib/const";

export default function Footer() {
  return (
    <footer id="visit" className="bg-interior text-on-interior pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      <Image src="/svg/curved-leaf.svg" alt="" width={0} height={0} className="h-80 w-80 absolute rotate-140 opacity-10 bottom-0 right-0 w-48 h-auto fill-wood/20 pointer-events-none" />
      <Image src="/svg/curved-leaf.svg" alt="" width={0} height={0} className="h-200 w-200 absolute rotate-20 opacity-10 top-0 left-0 fill-wood/20 pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start md:items-center gap-16 relative z-10">
        <div className="max-w-md">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-sage" />
              <span className="text-sage uppercase tracking-[0.3em] text-xs font-semibold">
                Visit Us
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="font-heading text-5xl md:text-6xl mb-6">
              See you in
              <span className="text-sage italic">Sea Cliff.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex items-center gap-6">
              {Object.entries(SOCIAL_LINKS).map(([name, { icon: Icon, url }]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase hover:text-sage transition-colors group hover:icon-hover"
                  aria-label={name}
                >
                  <span className="w-10 h-10 rounded-full border border-on-interior/20 flex items-center justify-center group-hover:border-sage transition-colors group-hover:animate-pulse">
                    <Icon className="w-4 h-4" />
                  </span>
                  {name}
                </a>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={400} className="w-full md:w-auto">
          <div className="border border-on-interior/10 bg-on-interior/5 relative overflow-hidden group backdrop-blur-sm">
            <a href="https://maps.app.goo.gl/Z3q29wim9Lhrtf9X9" target="_blank" rel="noopener noreferrer" className="relative block p-6 lg:p-10 flex flex-col items-center justify-center gap-4">
              <img src="https://images.unsplash.com/photo-1779636448093-55a400a77d21?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Map" className="relative z-10 aspect-3/2 max-w-80 md:max-w-96 mx-auto rounded-lg group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              <div className="absolute z-0 inset-0 bg-sage translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />

              <div className="relative z-10 flex gap-8 items-center">
                <div className="bg-interior p-4 group-hover:bg-exterior transition-colors duration-700">
                  <MapPin className="w-6 h-6 text-sage group-hover:text-foreground-brand transition-colors duration-700" />
                </div>
                <div>
                  <h4 className="font-heading text-2xl mb-2 group-hover:text-foreground-brand transition-colors duration-700">
                    Need Directions to Salt & Honey Cafe?
                  </h4>
                  <p className="text-on-interior/60 text-sm leading-relaxed group-hover:text-foreground-brand/80 transition-colors duration-700">
                    320 Sea Cliff Ave, Sea Cliff, NY 11579
                    <br />
                    <span className="text-sage group-hover:text-foreground-brand mt-2 block font-medium">
                      Opening Autumn 2026
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </FadeUp>
      </div>

      <div className="max-w-7xl mx-auto mt-24 flex flex-wrap flex-col md:flex-row items-center justify-center gap-x-8 gap-y-3 text-xs tracking-[0.2em] uppercase text-on-interior/50">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-2 hover:bg-sage/10 hover:text-sage focus:bg-sage/10 focus:text-sage rounded-md hover:bg-on-interior/5 transition-colors duration-700"
            aria-label={link.label}
          >
            {link.label}
          </a>
        ))}
      </div>
      <Image src="/svg/saltandHoneyLogo.svg" alt="Salt and Honey Logo" width={800} height={100} className="opacity-90 mx-auto mb-10" />

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-on-interior/10 flex flex-col md:flex-row justify-between items-center text-sm text-on-interior/50 uppercase tracking-[0.3em] gap-4">
        <p>© {new Date().getFullYear()} Salt & Honey Cafe.</p>
      </div>
    </footer>
  );
}
