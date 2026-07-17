"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuMenu, LuX } from "react-icons/lu";
import { LINKS } from "@/lib/const";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1600px]">
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`relative py-1.5 pr-0 pl-0 flex items-center justify-between transition-[background-color,backdrop-filter,border-color,box-shadow,border-radius,padding-left,padding-right] duration-300 ease-out ${
            scrolled
              ? "rounded-2xl bg-exterior/70 backdrop-blur-xl border border-sage-light shadow-[0_8px_30px_-10px_rgba(61,43,31,0.08)] p-4!"
              : "rounded-none bg-transparent border border-transparent"
          }`}
        >
          <div className="flex items-center justify-between gap-4 w-full max-w-[45%]">
            <a href="/" className="aspect-square h-10 md:h-16 lg:h-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/svg/saltandHoneyLogoSmall.svg" alt="Salt & Honey Logo" />
            </a>

            <div className="hidden md:flex items-center gap-8 px-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-lg border-thin border-sage-light p-2 rounded-md hover:bg-accent hover:text-foreground-brand transition-colors ${scrolled ? "text-primary" : "text-primary"}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-[10px] bg-interior text-on-interior text-sm font-medium">
              Coming Soon!
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid place-items-center h-10 w-10 rounded-[10px] border border-sage-light text-foreground-brand cursor-pointer"
              aria-label="Toggle menu"
            >
              {open ? <LuX className="h-4 w-4" /> : <LuMenu className="h-4 w-4" />}
            </button>
          </div>
        </motion.nav>
        {/* Mobile menu dialog */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 rounded-2xl border border-sage-light bg-exterior/80 backdrop-blur-xl p-4 flex flex-col gap-1"
            >
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-foreground-brand py-2">
                  {l.label}
                </a>
              ))}
              <div className="mt-2 w-full px-4 py-2.5 rounded-[10px] bg-interior text-on-interior text-sm font-medium">
                Coming Soon
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
