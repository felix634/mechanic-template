"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Process />
      <Gallery />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
