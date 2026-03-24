"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

function SparkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
    }

    const sparks: Spark[] = [];
    const centerX = canvas.width * 0.5;
    const centerY = canvas.height * 0.55;

    function createSpark() {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      const colors = [
        "#E63946",
        "#FF6B35",
        "#FFD166",
        "#FF9F1C",
        "#FFFFFF",
      ];
      sparks.push({
        x: centerX + (Math.random() - 0.5) * 100,
        y: centerY + (Math.random() - 0.5) * 60,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 2,
        life: 1,
        maxLife: Math.random() * 60 + 30,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    function loop() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Create 2-3 sparks per frame
      for (let i = 0; i < 2 + Math.floor(Math.random() * 2); i++) {
        createSpark();
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.04; // gravity
        s.life -= 1 / s.maxLife;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx!.globalAlpha = s.life * 0.8;
        ctx!.fillStyle = s.color;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx!.fill();

        // glow
        ctx!.globalAlpha = s.life * 0.3;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.size * s.life * 3, 0, Math.PI * 2);
        ctx!.fill();
      }

      ctx!.globalAlpha = 1;
      animId = requestAnimationFrame(loop);
    }

    loop();
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const cleanup = animate();
    const handleResize = () => animate();
    window.addEventListener("resize", handleResize);
    return () => {
      cleanup?.();
      window.removeEventListener("resize", handleResize);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}

function Tachometer() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      {/* Outer ring */}
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="tachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
        {/* Background arc */}
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="4"
        />
        {/* Tick marks */}
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = -120 + (i * 240) / 29;
          const rad = (angle * Math.PI) / 180;
          const isMajor = i % 5 === 0;
          const innerR = isMajor ? 72 : 78;
          return (
            <line
              key={i}
              x1={100 + Math.cos(rad) * innerR}
              y1={100 + Math.sin(rad) * innerR}
              x2={100 + Math.cos(rad) * 85}
              y2={100 + Math.sin(rad) * 85}
              stroke={i > 22 ? "#E63946" : "rgba(255,255,255,0.3)"}
              strokeWidth={isMajor ? 2.5 : 1}
            />
          );
        })}
        {/* Active arc */}
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#tachGrad)"
          strokeWidth="4"
          strokeDasharray="425 567"
          strokeDashoffset="190"
          strokeLinecap="round"
          className="drop-shadow-[0_0_10px_rgba(230,57,70,0.5)]"
        />
        {/* RPM Numbers */}
        {[0, 1, 2, 3, 4, 5, 6].map((n) => {
          const angle = -120 + (n * 240) / 6;
          const rad = (angle * Math.PI) / 180;
          return (
            <text
              key={n}
              x={100 + Math.cos(rad) * 62}
              y={100 + Math.sin(rad) * 62 + 4}
              textAnchor="middle"
              fill={n >= 5 ? "#E63946" : "rgba(255,255,255,0.5)"}
              fontSize="10"
              fontFamily="var(--font-sans)"
              fontWeight="600"
            >
              {n}
            </text>
          );
        })}
        {/* Center */}
        <circle cx="100" cy="100" r="6" fill="#E63946" />
        <circle cx="100" cy="100" r="3" fill="#0A0A0A" />
        {/* Needle */}
        <line
          x1="100"
          y1="100"
          x2={100 + Math.cos((80 * Math.PI) / 180) * 55}
          y2={100 + Math.sin((80 * Math.PI) / 180) * 55}
          stroke="#E63946"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ animation: "tachometer 3s ease-out forwards", transformOrigin: "100px 100px" }}
        />
        {/* RPM label */}
        <text
          x="100"
          y="140"
          textAnchor="middle"
          fill="rgba(255,255,255,0.3)"
          fontSize="8"
          fontFamily="var(--font-sans)"
          letterSpacing="0.1em"
        >
          RPM x1000
        </text>
      </svg>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

      {/* Spark particles */}
      <SparkCanvas />

      <motion.div style={{ opacity, y }} className="relative z-20 text-center px-6 max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          {/* Tachometer */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Tachometer />
          </motion.div>

          {/* Title */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-sm font-medium tracking-[0.3em] uppercase">
                Professzionális Autószerviz
              </span>
              <div className="h-px w-12 bg-accent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]"
            >
              MEGBÍZHATÓ
              <br />
              <span className="text-accent">SZAKÉRTELEM</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-muted text-lg md:text-xl max-w-2xl mx-auto mt-4"
            >
              Több mint 15 év tapasztalat. Korszerű diagnosztika.
              <br className="hidden md:block" />{" "}
              Az Ön autója a legjobb kezekben van.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href="#kapcsolat"
              className="group relative bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Időpontfoglalás</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#szolgaltatasok"
              className="border border-border hover:border-accent/50 text-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-accent/5"
            >
              Szolgáltatásaink
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs tracking-widest uppercase">
          Görgess
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
