"use client";

import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Cím",
    value: "1138 Budapest, Váci út 152.",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+36 30 123 4567",
    href: "tel:+36301234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@automester.hu",
    href: "mailto:info@automester.hu",
  },
  {
    icon: Clock,
    label: "Nyitvatartás",
    value: "H-P: 8:00-18:00 | Szo: 9:00-14:00",
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="kapcsolat" className="py-24 md:py-32 relative bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
            Kapcsolat
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            KERESSEN <span className="text-accent">MINKET</span>
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Foglaljon időpontot, vagy kérjen ingyenes árajánlatot!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1} direction="left">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-widest mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-accent transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground text-sm">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Map placeholder */}
            <AnimatedSection delay={0.4} direction="left">
              <div className="mt-8 aspect-[16/9] rounded-2xl overflow-hidden bg-surface-light border border-border flex items-center justify-center">
                <div className="text-center text-muted">
                  <MapPin size={32} className="mx-auto opacity-20 mb-2" />
                  <span className="text-xs">Google Térkép helye</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="bg-background rounded-2xl border border-border p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold mb-6">
                Kérjen <span className="text-accent">Árajánlatot</span>
              </h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-muted uppercase tracking-widest mb-2 block">
                      Név
                    </label>
                    <input
                      type="text"
                      placeholder="Teljes név"
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted uppercase tracking-widest mb-2 block">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      placeholder="+36 ..."
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted uppercase tracking-widest mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent/50 focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-muted uppercase tracking-widest mb-2 block">
                      Autó Típusa
                    </label>
                    <input
                      type="text"
                      placeholder="pl. BMW 320d, 2019"
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted uppercase tracking-widest mb-2 block">
                      Szolgáltatás
                    </label>
                    <select className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-muted/80 focus:border-accent/50 focus:outline-none transition-colors appearance-none">
                      <option>Válasszon...</option>
                      <option>Motor Diagnosztika</option>
                      <option>Általános Szerviz</option>
                      <option>Karosszéria Javítás</option>
                      <option>Futómű & Kormány</option>
                      <option>Elektromos Rendszer</option>
                      <option>Műszaki Vizsga</option>
                      <option>Egyéb</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted uppercase tracking-widest mb-2 block">
                    Üzenet
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Írja le a problémát vagy kérdését..."
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <Send size={18} />
                  Árajánlat Kérése
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
