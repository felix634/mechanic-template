import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AutoMester Pro | Professzionális Autószerviz",
  description:
    "Prémium autószerelő szolgáltatások Budapest-szerte. Motordiagnosztika, karosszéria javítás, futómű beállítás és teljes körű szerviz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${oswald.variable} ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
