"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { PhoneCall, ClipboardCheck, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Kapcsolatfelvétel",
    description: "Hívjon minket vagy foglaljon online időpontot. Gyors és egyszerű.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Diagnosztika",
    description: "Alapos állapotfelmérés és részletes árajánlat készítés.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Szakszerű Javítás",
    description: "Precíz munkavégzés, eredeti minőségű alkatrészekkel.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Átadás",
    description: "Minőségellenőrzés, tesztvezetés és garanciás átadás.",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            Hogyan Dolgozunk
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            4 EGYSZERŰ <span className="text-accent">LÉPÉS</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative text-center group"
              >
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-background border-2 border-border group-hover:border-accent/50 transition-colors duration-300 flex items-center justify-center relative z-10">
                    <step.icon
                      size={28}
                      className="text-accent"
                    />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center z-20">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
