"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.40%284%29-VFF8WLGAk4MTnvdCjk64oZRbEswfna.jpeg",
    alt: "Evento Paradise con público",
    category: "Club",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.39%284%29-wrQ0FWGrRVslXHqz91f3e8tYH6oZhV.jpeg",
    alt: "Evento con luces neón rojas",
    category: "Festival",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.38-lgLZ23UQQlbFT7geGFadmrdcPn2iqI.jpeg",
    alt: "DJ al atardecer",
    category: "Festival",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.39%282%29-HxQsGskYw0TbVpruhERoNarb5ltR4y.jpeg",
    alt: "Performance en escenario grande",
    category: "Festival",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.40%281%29-YVE8HZ5H5HHRno8fxbDpVwz2E9XMiO.jpeg",
    alt: "Evento bajo carpa con multitud",
    category: "Festival",
  },
  {
    src: "/maticastro-dj.jpeg",
    alt: "DJ con auriculares Paradise",
    category: "Club",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.39%281%29-1eCerg0HApkC3E7vxh93VirNYTWCrY.jpeg",
    alt: "DJ con campera blanca y pantallas LED",
    category: "Festival",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.38%281%29-G4WjNk5BeZdnHRXGRNu1eZ6WjgTJSs.jpeg",
    alt: "Zona de Perreo",
    category: "Club",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.39%283%29-A0LDNzqgbZA2cRRmfrZ0Hjkn9fMo3u.jpeg",
    alt: "Luces neón geométricas rojas",
    category: "Club",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.40%282%29-lfmYwYZRydLtTMjfGWFrNYKsvgCjLm.jpeg",
    alt: "Pose con luces Paradise",
    category: "Club",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.39-WaevDaSFfgSPiTQrKrcUDtpY2VvSUe.jpeg",
    alt: "Ambiente Zona de Perreo",
    category: "Club",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.40-oU0GiJYksQFtmMbudC1ZGOdLRXh5hn.jpeg",
    alt: "DJ con luces azules",
    category: "Club",
  },
];

// Individual portfolio item with scroll-based scale
function PortfolioItem({
  image,
  index,
  onClick,
}: {
  image: (typeof portfolioImages)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 border-2 border-[#fe5900]/0 group-hover:border-[#fe5900]/50 rounded-xl transition-colors duration-300"
        whileHover={{
          boxShadow: "inset 0 0 30px rgba(254, 89, 0, 0.2)",
        }}
      />

      {/* Category badge */}
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-3 py-1 bg-[#fe5900] text-black text-xs font-bold rounded-full">
          {image.category}
        </span>
      </div>

      {/* View indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 bg-[#fe5900] rounded-full flex items-center justify-center">
          <span className="text-black text-xl">+</span>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? portfolioImages.length - 1 : selectedImage - 1,
      );
    } else {
      setSelectedImage(
        selectedImage === portfolioImages.length - 1 ? 0 : selectedImage + 1,
      );
    }
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fe5900]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-[#fe5900] font-bold text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Momentos{" "}
            <span className="text-[#fe5900] neon-text-subtle">
              inolvidables
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-white/60 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Una seleccion de los mejores momentos capturados en mis shows. Cada
            imagen cuenta una historia de energia y conexion con el publico.
          </motion.p>
        </motion.div>

        {/* Gallery Grid with scroll-based scale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioImages.map((image, index) => (
            <PortfolioItem
              key={index}
              image={image}
              index={index}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-[#fe5900] rounded-full flex items-center justify-center transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#fe5900] rounded-full flex items-center justify-center transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#fe5900] rounded-full flex items-center justify-center transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={portfolioImages[selectedImage].src}
                alt={portfolioImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selectedImage + 1} / {portfolioImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
