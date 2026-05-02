"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Mati transformó completamente nuestra fiesta de fin de año. La energía que creó fue increíble, todos los empleados siguen hablando del evento meses después.",
    author: "María González",
    role: "Directora de RRHH",
    company: "Tech Solutions SA",
  },
  {
    quote:
      "Para el lanzamiento de nuestro nuevo producto necesitábamos algo especial. Mati entendió perfectamente la visión y creó una atmósfera que reflejó nuestra marca.",
    author: "Carlos Rodríguez",
    role: "Director de Marketing",
    company: "Innovate Corp",
  },
  {
    quote:
      "Profesionalismo de primer nivel. Desde la planificación hasta la ejecución, todo fue impecable. Sin duda lo volveremos a contratar.",
    author: "Ana Martínez",
    role: "Event Manager",
    company: "Eventos Premium",
  },
  {
    quote:
      "La boda de mi hija fue perfecta gracias a Mati. Supo leer el momento exacto para cada canción y todos bailaron hasta el amanecer.",
    author: "Roberto Fernández",
    role: "Padre de la novia",
    company: "Boda Fernández-López",
  },
]

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const navigate = (direction: "prev" | "next") => {
    setIsAutoPlaying(false)
    if (direction === "prev") {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    } else {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#fe5900]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fe5900]/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Testimonios
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Lo que dicen{" "}
            <span className="text-[#fe5900] neon-text-subtle">mis clientes</span>
          </motion.h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div
                    className="text-center p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
                    whileHover={{
                      borderColor: "rgba(254, 89, 0, 0.3)",
                      boxShadow: "0 0 40px rgba(254, 89, 0, 0.1)",
                    }}
                  >
                    {/* Quote icon */}
                    <motion.div
                      className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#fe5900]/10 flex items-center justify-center"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(254, 89, 0, 0.2)",
                          "0 0 40px rgba(254, 89, 0, 0.4)",
                          "0 0 20px rgba(254, 89, 0, 0.2)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Quote className="w-8 h-8 text-[#fe5900]" />
                    </motion.div>

                    {/* Quote text */}
                    <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div>
                      <p className="text-[#fe5900] font-bold text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-white/60">
                        {testimonial.role} - {testimonial.company}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#fe5900] hover:border-[#fe5900] transition-colors"
              onClick={() => navigate("prev")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-[#fe5900]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  whileHover={{ scale: 1.2 }}
                  animate={
                    index === currentIndex
                      ? { boxShadow: "0 0 15px #fe5900" }
                      : { boxShadow: "none" }
                  }
                />
              ))}
            </div>

            <motion.button
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#fe5900] hover:border-[#fe5900] transition-colors"
              onClick={() => navigate("next")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
