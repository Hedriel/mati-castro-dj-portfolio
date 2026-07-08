import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mati Castro DJ | Eventos Corporativos & Fiestas Premium",
    short_name: "Mati Castro DJ",
    description:
      "DJ profesional especializado en eventos corporativos, lanzamientos de marca, fiestas privadas premium y eventos especiales.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}