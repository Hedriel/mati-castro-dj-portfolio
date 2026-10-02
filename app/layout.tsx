import type { Metadata, Viewport } from "next";
import { Michroma } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Mati Castro DJ",
  type: "image/jpeg",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Mati Castro DJ | Eventos Corporativos & Fiestas Premium",
    description:
      "El DJ que enciende tus eventos corporativos. Servicios profesionales para empresas, marcas y eventos especiales.",
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Mati Castro DJ",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mati Castro DJ | Eventos Corporativos & Fiestas Premium",
    description:
      "El DJ que enciende tus eventos corporativos. Servicios profesionales para empresas, marcas y eventos especiales.",
    images: [ogImage],
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
