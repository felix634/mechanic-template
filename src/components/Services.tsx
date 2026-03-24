"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import {
  Wrench,
  Gauge,
  Shield,
  Zap,
  Car,
  Cog,
} from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "Motor Diagnosztika",
    description:
      "Korszerű OBD-II diagnosztikai eszközökkel azonosítjuk a problémákat gyorsan és pontosan.",
    accent: true,
  },
  {
    icon: Wrench,
    title: "Általános Szerviz",
    description:
      "Olajcsere, szűrőcsere, fékfelújítás, időszakos karbantartás – minden egy helyen.",
    accent: false,
  },
  {
    icon: Car,
    title: "Karosszéria Javítás",
    description:
      "Horpadás javítás, fényezés, rozsdakezelés. Autója újra gyári állapotban ragyog.",
    accent: false,
  },
  {
    icon: Cog,
    title: "Futómű & Kormány",
    description:
      "Futómű beállítás, lengéscsillapító csere, kormánygeometria – a biztonságos közlekedésért.",
    accent: false,
  },
  {
    icon: Zap,
    title: "Elektromos Rendszer",
    description:
      "Akkumulátor teszt, generátor javítás, elektromos hibakeresés modern műszerekkel.",
    accent: false,
  },
  {
    icon: Shield,
    title: "Műszaki Vizsga",
    description:
      "Műszaki vizsgára való felkészítés és lebonyolítás. Garantált átmenés, vagy ingyen javítjuk.",
    accent: true,
  },
];

export function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            Szolgáltatásaink
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            AMIRE <span className="text-accent">SZÜKSÉGE</span> VAN
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Teljes körű autószerelő szolgáltatások, a legmodernebb felszereléssel
          </p>
        </AnimatedSection>

        {/* Service Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group relative p-8 rounded-2xl border transition-all duration-500 h-full ${
                  service.accent
                    ? "bg-accent/10 border-accent/20 hover:border-accent/50"
                    : "bg-surface border-border hover:border-accent/30"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    service.accent
                      ? "bg-accent text-white"
                      : "bg-surface-light text-accent group-hover:bg-accent group-hover:text-white"
                  }`}
                >
                  <service.icon size={26} />
                </div>

                <h3 className="font-serif text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
                  <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-accent/50 to-transparent" />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
