"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const galleryItems = [
  {
    title: "Motor Felújítás",
    category: "Motorjavítás",
    description: "Teljes motor szétszedés, felújítás és összeszerelés",
  },
  {
    title: "Fényezés",
    category: "Karosszéria",
    description: "Prémium autófényezés, gyári minőségben",
  },
  {
    title: "Diagnosztika",
    category: "Elektronika",
    description: "Korszerű OBD-II komplex hibakeresés",
  },
  {
    title: "Futómű Beállítás",
    category: "Futómű",
    description: "Precíz geometria beállítás lézerrel",
  },
  {
    title: "Fékfelújítás",
    category: "Fékrendszer",
    description: "Teljes fékrendszer csere és felújítás",
  },
  {
    title: "Klíma Szerviz",
    category: "Komfort",
    description: "Klímatöltés, fertőtlenítés, szivárgás keresés",
  },
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-40%"]);

  return (
    <section id="munkaink" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <AnimatedSection>
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            Portfólió
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            MUNKÁINK <span className="text-accent">BESZÉLNEK</span>
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl">
            Néhány a számtalan sikeresen elvégzett munkánk közül
          </p>
        </AnimatedSection>
      </div>

      {/* Horizontal scroll gallery */}
      <div ref={containerRef} className="relative">
        <motion.div style={{ x }} className="flex gap-6 pl-6 pr-32">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-[350px] md:w-[420px] group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border">
                {/* Placeholder */}
                <div className="w-full h-full flex flex-col items-center justify-center text-muted bg-gradient-to-br from-surface to-surface-light">
                  <svg
                    className="w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                  <span className="text-xs mt-2 opacity-50">{item.category} fotó</span>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div>
                    <span className="text-accent text-xs tracking-widest uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold mt-1">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
