import type { Metadata, Viewport } from "next";
import { Michroma } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export const metadata: Metadata = {
  title: "Mati Castro DJ | Eventos Corporativos & Fiestas Premium",
  description:
    "DJ profesional especializado en eventos corporativos, lanzamientos de marca, fiestas privadas premium y eventos especiales. El DJ que enciende tus eventos.",
  keywords: [
    "DJ",
    "eventos corporativos",
    "fiestas",
    "Buenos Aires",
    "Argentina",
    "música",
    "eventos empresariales",
  ],
  authors: [{ name: "Mati Castro" }],
  icons: {
    icon: "/logo-mati.castro.png",
    apple: "/logo-mati.castro.png",
  },
  openGraph: {
    title: "Mati Castro DJ | Eventos Corporativos & Fiestas Premium",
    description:
      "El DJ que enciende tus eventos corporativos. Servicios profesionales para empresas, marcas y eventos especiales.",
    type: "website",
    locale: "es_AR",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${michroma.variable} bg-black`}>
      <body className={`${michroma.className} antialiased bg-black text-white`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
