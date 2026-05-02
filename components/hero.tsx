"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-[100dvh] flex flex-col lg:flex-row items-center overflow-hidden pt-24 lg:pt-0"
    >
      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col lg:block justify-center pb-0 lg:py-0"
        style={{ opacity }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2  lg:gap-8 items-center flex-1 h-full justify-between lg:justify-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-left order-1 flex-1 flex flex-col justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Title */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-[#fe5900] neon-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              MATI<br />CASTRO
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Nacido en Adrogue Provincia de Bs As, Argentina, su historia comienza en 2014 con una obsesion inquebrantable por la musica; lo que empezo en fiestas pequenas pronto se transformo en una evolucion constante donde cada set era un viaje y una forma unica de conectar con el publico.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.a
                href="https://www.instagram.com/maticastrodj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#fe5900] border border-white/20 hover:border-[#fe5900] rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px #fe5900" }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
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

          {/* Right side - Floating Image */}
          <motion.div
            className="relative order-2 flex justify-center lg:justify-end items-end w-full mt-auto translate-y-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] aspect-[3/4]">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-[#fe5900]/20 blur-3xl rounded-full scale-75" />

              {/* Floating animated container */}
              <motion.div
                className="relative w-full h-full lg:animate-float max-lg:!transform-none"
                animate={{
                  y: [0, -10, 0, -5, 0],
                  x: [0, 3, 0, -3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/mati-castro-persona.png"
                  alt="Mati Castro DJ"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_0_40px_rgba(254,89,0,0.3)]"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
