"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kovács Tamás",
    car: "BMW 320d, 2019",
    text: "Kiváló munka! A motor diagnosztikát percek alatt elvégezték, és az árajánlat is korrekt volt. Azóta csak ide hozom az autómat.",
    rating: 5,
  },
  {
    name: "Nagy Eszter",
    car: "Volkswagen Golf VII, 2020",
    text: "Rendkívül profik és megbízhatóak. A futómű beállítás után az autó olyan, mint új. Mindenkinek ajánlom őket!",
    rating: 5,
  },
  {
    name: "Szabó István",
    car: "Audi A4 Avant, 2018",
    text: "Már 5 éve járok hozzájuk. Mindig őszinték, nem akarnak felesleges dolgokat rámsózni. A műszaki vizsgára is tökéletesen felkészítették az autót.",
    rating: 5,
  },
  {
    name: "Tóth Katalin",
    car: "Toyota RAV4 Hybrid, 2021",
    text: "Hibrid autóhoz is kitűnően értenek. Nagyon részletes magyarázatot kaptam minden elvégzett munkáról. Maximálisan elégedett vagyok!",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="velemenyek" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            Vélemények
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            ÜGYFELEINK <span className="text-accent">MONDTÁK</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote icon */}
          <Quote
            size={80}
            className="absolute -top-4 left-0 text-accent/10 -z-10"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-accent text-accent"
                    />
                  )
                )}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light italic max-w-3xl mx-auto">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <span className="font-serif font-bold text-accent text-lg">
                    {testimonials[current].name[0]}
                  </span>
                </div>
                <div className="font-serif text-lg font-bold">
                  {testimonials[current].name}
                </div>
                <div className="text-muted text-sm mt-1">
                  {testimonials[current].car}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border hover:border-accent/50 flex items-center justify-center transition-colors duration-300 hover:bg-accent/5"
              aria-label="Előző vélemény"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-accent w-8"
                      : "bg-border hover:bg-muted"
                  }`}
                  aria-label={`Vélemény ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border hover:border-accent/50 flex items-center justify-center transition-colors duration-300 hover:bg-accent/5"
              aria-label="Következő vélemény"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
