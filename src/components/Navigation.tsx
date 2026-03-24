"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Szolgáltatások", href: "#szolgaltatasok" },
  { label: "Rólunk", href: "#rolunk" },
  { label: "Munkáink", href: "#munkaink" },
  { label: "Vélemények", href: "#velemenyek" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              <span className="font-serif text-xl font-bold tracking-wider">
                AUTO<span className="text-accent">MESTER</span>
              </span>
              <span className="block text-[10px] text-muted tracking-[0.3em] uppercase -mt-1">
                Pro Szerviz
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+36301234567"
              className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
            >
              <Phone size={16} />
              <span>+36 30 123 4567</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground p-2"
              aria-label="Menü"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-serif text-3xl font-bold hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:+36301234567"
                className="mt-4 flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-lg text-lg font-medium"
              >
                <Phone size={20} />
                +36 30 123 4567
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
