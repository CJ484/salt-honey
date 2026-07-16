"use client";

import { FadeUp } from "@/components/index";
import { MENU_CATEGORIES, formatPrice, type MenuItem } from "@/lib/menu";

const CATEGORY_DELAYS = [100, 200, 300] as const;

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <FadeUp delay={index * 80} className="h-full">
      <article className="group h-full flex flex-col overflow-hidden border border-sage-light bg-exterior shadow-sm hover:shadow-xl hover:border-sage transition-all duration-500">
        <div className="aspect-[4/3] overflow-hidden bg-sage-light">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.picture}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h4 className="text-lg text-foreground-brand leading-snug">{item.name}</h4>
            <span className="text-wood text-lg font-semibold whitespace-nowrap pt-0.5">
              {formatPrice(item.price)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.description}</p>
        </div>
      </article>
    </FadeUp>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="py-32 md:py-48 relative bg-exterior">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #3D2B1F 1px, transparent 1px), linear-gradient(to bottom, #3D2B1F 1px, transparent 1px)",
          backgroundSize: "120px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeUp>
          <div className="text-center mb-20 md:mb-24">
            <span className="text-sage uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              The Slow Bar
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground-brand">
              A preview of the counter.
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-20 md:space-y-28">
          {MENU_CATEGORIES.map((category, categoryIndex) => (
            <div key={category.key}>
              <FadeUp delay={CATEGORY_DELAYS[categoryIndex] ?? 100}>
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-8 h-px bg-wood" />
                  <h3 className="text-wood uppercase tracking-[0.3em] text-xs font-semibold">
                    {category.title}
                  </h3>
                </div>
              </FadeUp>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {category.items.map((item, itemIndex) => (
                  <MenuItemCard key={item.id} item={item} index={itemIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
