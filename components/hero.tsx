"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0],
  );

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-[100svh] lg:min-h-[100dvh] flex flex-col lg:flex-row items-center overflow-x-clip lg:overflow-hidden pt-24 lg:pt-0 pb-12 lg:pb-0"
    >
      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col lg:block justify-center pb-8 lg:pb-0"
        style={isMobile ? undefined : { opacity }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 items-center flex-1 lg:h-full justify-start lg:justify-center gap-8">
          {/* Left side - Text content */}
          <motion.div
            key={isMobile ? "text-mobile" : "text-desktop"}
            className="text-left order-1 flex-1 flex flex-col justify-center mt-8 lg:mt-0"
            initial={{
              opacity: 0,
              scale: isMobile ? 0.7 : 1,
              x: isMobile ? 0 : -50,
            }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Main Title */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-[#fe5900] neon-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
            >
              MATI
              <br />
              CASTRO
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0.5 : 0.4, duration: 0.8 }}
            >
              Nacido en Adrogue Provincia de Bs As, Argentina, su historia
              comienza en 2014 con una obsesion inquebrantable por la musica; lo
              que empezo en fiestas pequenas pronto se transformo en una
              evolucion constante donde cada set era un viaje y una forma unica
              de conectar con el publico.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex items-center justify-center sm:justify-start gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0.8 : 0.6, duration: 0.3 }}
            >
              <motion.a
                href="https://www.instagram.com/maticastrodj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-12 h-12 bg-white/10 group-hover:bg-[#fe5900] border border-white/20 group-hover:border-[#fe5900] rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_#fe5900]">
                  <Instagram className="w-5 h-5 text-white" />
                </span>
                <span className="text-[10px] text-white/60 group-hover:text-[#fe5900] transition-colors duration-300 uppercase tracking-wider font-medium">
                  Mati Castro
                </span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/newlevel.ok/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="w-12 h-12 bg-white/10 group-hover:bg-[#fe5900] border border-white/20 group-hover:border-[#fe5900] rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_#fe5900]">
                  <Instagram className="w-5 h-5 text-white" />
                </span>
                <span className="text-[10px] text-white/60 group-hover:text-[#fe5900] transition-colors duration-300 uppercase tracking-wider font-medium">
                  NewLevel.ok
                </span>
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 1.1 : 0.8, duration: 0.3 }}
            >
              <motion.a
                href="#portfolio"
                className="px-8 py-4 border-2 border-[#fe5900] text-[#fe5900] font-bold rounded-full hover:bg-[#fe5900] hover:text-black transition-all duration-300 neon-border text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #fe5900" }}
                whileTap={{ scale: 0.95 }}
              >
                Ver mi trabajo
              </motion.a>
              <motion.a
                href="#contacto"
                className="px-8 py-4 bg-[#fe5900] text-black font-bold rounded-full neon-box-subtle hover:bg-[#ff7733] transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px #fe5900" }}
                whileTap={{ scale: 0.95 }}
              >
                Reservar ahora
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Floating Image - only render on desktop */}
          {isDesktop && (
            <motion.div
              className="relative order-2 flex justify-center lg:justify-end items-end w-full mt-auto translate-y-20"
              initial={{
                opacity: 0,
                scale: 1,
                x: 50,
              }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3,
              }}
            >
              <div className="relative w-[252px] sm:w-[315px] md:w-[360px] lg:w-[405px] xl:w-[450px] aspect-[3/4] rounded-3xl">
                {/* Floating animated container */}
                <motion.div
                  className="relative w-full h-full animate-float border-2 border-[#fe5900] rounded-3xl overflow-hidden"
                  animate={{
                    y: [0, -10, 0, -5, 0],
                    x: [0, 3, 0, -3, 0],
                    boxShadow: [
                      "0 0 15px rgba(254, 89, 0, 0.4), 0 0 30px rgba(254, 89, 0, 0.2), inset 0 0 10px rgba(254, 89, 0, 0.1)",
                      "0 0 40px rgba(254, 89, 0, 0.9), 0 0 80px rgba(254, 89, 0, 0.5), inset 0 0 25px rgba(254, 89, 0, 0.3)",
                      "0 0 15px rgba(254, 89, 0, 0.4), 0 0 30px rgba(254, 89, 0, 0.2), inset 0 0 10px rgba(254, 89, 0, 0.1)",
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 bg-[#fe5900]/20 blur-3xl rounded-full scale-75" />

                  <Image
                    src="/maticastro-hero.jpg"
                    alt="Mati Castro DJ"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
