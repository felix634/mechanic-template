"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold">
                  AUTO<span className="text-accent">MESTER</span>
                </span>
                <span className="block text-[10px] text-muted tracking-[0.3em] uppercase -mt-1">
                  Pro Szerviz
                </span>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Professzionális autószerelő szolgáltatások Budapest-szerte, több mint
              15 év tapasztalattal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase mb-4">
              Gyors Linkek
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Szolgáltatások", href: "#szolgaltatasok" },
                { label: "Rólunk", href: "#rolunk" },
                { label: "Munkáink", href: "#munkaink" },
                { label: "Vélemények", href: "#velemenyek" },
                { label: "Kapcsolat", href: "#kapcsolat" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase mb-4">
              Szolgáltatások
            </h4>
            <ul className="space-y-2.5">
              {[
                "Motor Diagnosztika",
                "Általános Szerviz",
                "Karosszéria Javítás",
                "Futómű Beállítás",
                "Műszaki Vizsga",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase mb-4">
              Elérhetőség
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted text-sm">
                  1138 Budapest, Váci út 152.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+36301234567"
                  className="text-muted text-sm hover:text-accent transition-colors"
                >
                  +36 30 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@automester.hu"
                  className="text-muted text-sm hover:text-accent transition-colors"
                >
                  info@automester.hu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            &copy; 2024 AutoMester Pro. Minden jog fenntartva.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted text-xs hover:text-accent transition-colors">
              Adatvédelem
            </a>
            <a href="#" className="text-muted text-xs hover:text-accent transition-colors">
              ÁSZF
            </a>
            <a href="#" className="text-muted text-xs hover:text-accent transition-colors">
              Cookie Szabályzat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
