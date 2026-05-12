"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Music, Award, Users, Calendar } from "lucide-react"

const stats = [
  { icon: Calendar, value: "10+", label: "Años de experiencia" },
  { icon: Users, value: "500+", label: "Eventos realizados" },
  { icon: Music, value: "50K+", label: "Horas de musica" },
  { icon: Award, value: "100%", label: "Clientes satisfechos" },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#fe5900]/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#fe5900]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-16%20at%2014.22.41-e7Dj9DBgZ7d01a5iGwKUIMPb7xPxVA.jpeg"
                alt="Mati Castro DJ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
            
            {/* Decorative border */}
            <motion.div
              className="absolute -inset-4 border-2 border-[#fe5900]/30 rounded-2xl -z-10"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(254, 89, 0, 0.2)",
                  "0 0 40px rgba(254, 89, 0, 0.4)",
                  "0 0 20px rgba(254, 89, 0, 0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.span
                className="text-[#fe5900] font-bold text-sm tracking-widest uppercase"
                variants={itemVariants}
              >
                Sobre Mi
              </motion.span>
              <motion.h2
                className="text-4xl sm:text-5xl font-bold text-white mt-2 leading-tight"
                variants={itemVariants}
              >
                Mas que musica,{" "}
                <span className="text-[#fe5900] neon-text-subtle">
                  experiencias
                </span>
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-white/70 leading-relaxed"
              variants={itemVariants}
            >
              Nacido en Adrogue Provincia de Bs As, Argentina, su historia comienza en 2014 con una obsesion inquebrantable por la musica; lo que empezo en fiestas pequenas pronto se transformo en una evolucion constante donde cada set era un viaje y una forma unica de conectar con el publico.
            </motion.p>

            <motion.p
              className="text-lg text-white/70 leading-relaxed"
              variants={itemVariants}
            >
              Con los años, su sonido se volvio inconfundible, mezclando generos con identidad propia y conquistando pistas cada vez mas grandes, hasta llegar a escenarios masivos y compartir cabina con los artistas mas virales y pegados de distintos generos. Lejos de frenarse, incluso en los momentos mas dificiles reinvento su camino, consolidando una presencia que hoy impone respeto y expectativa.
            </motion.p>

            <motion.p
              className="text-lg text-white/70 leading-relaxed"
              variants={itemVariants}
            >
              Mas que seguir tendencias, las transforma, dejando su marca en cada lugar donde toca, porque su historia no es solo la de un DJ, sino la de una ambicion que sigue creciendo y que aun esta lejos de alcanzar su techo.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#fe5900]/50 transition-colors"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(254, 89, 0, 0.3)",
                  }}
                  custom={index}
                >
                  <stat.icon className="w-8 h-8 text-[#fe5900] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#fe5900] neon-text-subtle">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
