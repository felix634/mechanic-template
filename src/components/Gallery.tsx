"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const galleryItems = [
  {
    title: "Motor Felújítás",
    category: "Motorjavítás",
    description: "Teljes motor szétszedés, felújítás és összeszerelés",
    image: "/images/gallery-engine.jpg",
  },
  {
    title: "Fényezés",
    category: "Karosszéria",
    description: "Prémium autófényezés, gyári minőségben",
    image: "/images/gallery-painting.jpg",
  },
  {
    title: "Diagnosztika",
    category: "Elektronika",
    description: "Korszerű OBD-II komplex hibakeresés",
    image: "/images/gallery-diagnostics.jpg",
  },
  {
    title: "Futómű Beállítás",
    category: "Futómű",
    description: "Precíz geometria beállítás lézerrel",
    image: "/images/gallery-wheel.jpg",
  },
  {
    title: "Fékfelújítás",
    category: "Fékrendszer",
    description: "Teljes fékrendszer csere és felújítás",
    image: "/images/gallery-brake.jpg",
  },
  {
    title: "Klíma Szerviz",
    category: "Komfort",
    description: "Klímatöltés, fertőtlenítés, szivárgás keresés",
    image: "/images/gallery-ac.jpg",
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
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 350px, 420px"
                />

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
