"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Phone, ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            NE VÁRJON, AMÍG
            <br />
            <span className="text-accent">KOMOLYABB LESZ!</span>
          </h2>
          <p className="text-muted text-lg mt-6 max-w-2xl mx-auto">
            A kis problémából gyorsan nagy baj lehet. Hozza be autóját egy
            ingyenes állapotfelmérésre, és előzze meg a költséges javításokat!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <motion.a
              href="tel:+36301234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300"
              style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
            >
              <Phone size={20} />
              Hívjon Most!
            </motion.a>
            <motion.a
              href="#kapcsolat"
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-2 text-foreground hover:text-accent px-6 py-4 font-medium transition-colors duration-300"
            >
              Online Időpontfoglalás
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
