"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";

function Counter({ end, suffix = "", label, icon: Icon }: { end: number; suffix?: string; label: string; icon: React.ElementType }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
        <Icon size={28} className="text-accent" />
      </div>
      <div className="font-serif text-4xl md:text-5xl font-bold text-foreground">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-muted text-sm mt-2 tracking-wide">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="rolunk" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-surface" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <AnimatedSection direction="left">
            <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
              Rólunk
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 leading-tight">
              SZENVEDÉLYÜNK
              <br />
              AZ <span className="text-accent">AUTÓK</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                2009 óta nyújtunk prémium minőségű autószerelő szolgáltatásokat
                Budapest szívében. Csapatunk tapasztalt szakemberekből áll, akik
                folyamatosan képzik magukat a legújabb technológiák terén.
              </p>
              <p>
                Műhelyünk a legmodernebb diagnosztikai és szerelő berendezésekkel
                van felszerelve, hogy minden márkát és típust profin kezelni tudjunk
                – legyen szó hagyományos belsőégésű motorról vagy modern hibrid
                rendszerről.
              </p>
            </div>

            {/* Features list */}
            <div className="mt-8 space-y-3">
              {[
                "Garanciát vállalunk minden munkánkra",
                "Eredeti és OEM minőségű alkatrészek",
                "Transzparens árazás, rejtett költségek nélkül",
                "Ingyenes állapotfelmérés",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right - Image placeholder with overlay */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-light border border-border">
                {/* Placeholder mechanic image */}
                <div className="w-full h-full flex flex-col items-center justify-center text-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                  <svg
                    className="w-32 h-32 opacity-20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  <span className="text-sm mt-4 relative z-20">
                    Műhely fotó helye
                  </span>
                  <span className="text-xs text-muted/50 mt-1 relative z-20">
                    1200 × 1500 px ajánlott
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-accent text-white p-5 rounded-2xl shadow-2xl z-20"
              >
                <div className="font-serif text-3xl font-bold">15+</div>
                <div className="text-xs tracking-wider uppercase opacity-80">
                  Év Tapasztalat
                </div>
              </motion.div>

              {/* Corner decorative */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border border-accent/20 rounded-2xl -z-10" />
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 border-t border-b border-border">
          <Counter end={15} suffix="+" label="Év Tapasztalat" icon={Clock} />
          <Counter end={8500} suffix="+" label="Elégedett Ügyfél" icon={Users} />
          <Counter end={98} suffix="%" label="Visszatérő Ügyfél" icon={ThumbsUp} />
          <Counter end={12} label="Szakember" icon={Award} />
        </div>
      </div>
    </section>
  );
}
