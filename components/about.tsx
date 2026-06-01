"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Music, Award, Users, Calendar } from "lucide-react";

const stats = [{ icon: Calendar, value: "10+", label: "Años de experiencia" }];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/maticastro-about.jpg"
                fill
                className="object-cover"
                alt={""}
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
              <motion.h2
                className="text-4xl sm:text-5xl font-bold text-white mt-2 leading-tight"
                variants={itemVariants}
              >
                Sobre&nbsp;
                <span className="text-[#fe5900] neon-text-subtle">Mi</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-white/70 leading-relaxed"
              variants={itemVariants}
            >
              Con los años, su sonido se volvió inconfundible, mezclando géneros
              con identidad propia y conquistando pistas cada vez más grandes,
              hasta llegar a escenarios masivos y compartir cabina con los
              artistas más virales y pegados de distintos géneros. Lejos de
              frenarse, incluso en los momentos más difíciles reinventó su
              camino, consolidando una presencia que hoy impone respeto y
              expectativa.
            </motion.p>

            <motion.p
              className="text-lg text-white/70 leading-relaxed"
              variants={itemVariants}
            >
              Más que seguir tendencias, las transforma, dejando su marca en
              cada lugar donde toca, porque su historia no es solo la de un DJ,
              sino la de una ambición que sigue creciendo y que aún está lejos
              de alcanzar su techo.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 justify-items-center"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#fe5900]/50 transition-colors w-full max-w-xs"
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
  );
}
