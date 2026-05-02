"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Megaphone, Crown, Users, Heart } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Eventos Corporativos",
    description:
      "Fiestas de empresa, after-office, celebraciones de fin de año y reuniones corporativas con la energía perfecta.",
  },
  {
    icon: Megaphone,
    title: "Lanzamientos de Marca",
    description:
      "Creamos la atmósfera ideal para presentaciones de producto, inauguraciones y eventos de marketing.",
  },
  {
    icon: Crown,
    title: "Fiestas Privadas Premium",
    description:
      "Cumpleaños exclusivos, celebraciones VIP y eventos privados con un toque único y personalizado.",
  },
  {
    icon: Users,
    title: "Team Building",
    description:
      "Dinámicas musicales, actividades interactivas y experiencias que fortalecen equipos de trabajo.",
  },
  {
    icon: Heart,
    title: "Bodas & Eventos Especiales",
    description:
      "Ceremonias, recepciones y fiestas de boda con setlists personalizados para cada momento.",
  },
]

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="servicios" className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fe5900]/5 via-transparent to-transparent" />
      
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
            Servicios
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Lo que{" "}
            <span className="text-[#fe5900] neon-text-subtle">ofrezco</span>
          </motion.h2>
          <motion.p
            className="text-lg text-white/60 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Servicios profesionales adaptados a cada tipo de evento, con la calidad y energía que tu celebración merece.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 h-full overflow-hidden"
                whileHover={{
                  borderColor: "rgba(254, 89, 0, 0.5)",
                  boxShadow: "0 0 40px rgba(254, 89, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#fe5900]/0 group-hover:bg-[#fe5900]/5 transition-colors duration-500"
                />

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-[#fe5900]/10 flex items-center justify-center mb-6 relative"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(254, 89, 0, 0.5)",
                  }}
                >
                  <service.icon className="w-8 h-8 text-[#fe5900]" />
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-[#fe5900]/50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fe5900] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-1 bg-gradient-to-r from-transparent to-[#fe5900]/50 rotate-45 translate-x-10 -translate-y-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
