import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "8cars - Tu Casa Para Vender Tu Vehículo",
  description:
    "Automotora digital enfocada en confianza, seguridad y servicio personalizado. Vendemos tu vehículo con fotos profesionales, revisión completa y proceso de transferencia.",
  keywords: [
    "automotora",
    "venta de autos",
    "compra de vehículos",
    "autos usados",
    "chile",
    "automotora digital",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}