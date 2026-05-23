"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const equipment = [
  {
    name: "PIONEER SX2",
    image: "/consola-sx2.jpeg",
  },
  {
    name: "PIONEER RX3 (ALL IN ONE)",
    image: "/consola-rx3.jpeg",
  },
  {
    name: "PIONEER RR (ALL IN ONE)",
    image: "/consola-rr.jpeg",
  },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="setup" className="py-24 relative overflow-hidden">
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
            Setup
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Mi <span className="text-[#fe5900] neon-text-subtle">equipo</span>
          </motion.h2>
          <motion.p
            className="text-lg text-white/60 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Consolas profesionales Pioneer que garantizan la mejor calidad de
            sonido y performance en cada evento.
          </motion.p>
        </motion.div>

        {/* Equipment Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {equipment.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 h-full overflow-hidden flex flex-col"
                whileHover={{
                  borderColor: "rgba(254, 89, 0, 0.5)",
                  boxShadow: "0 0 40px rgba(254, 89, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <motion.div className="absolute inset-0 bg-[#fe5900]/0 group-hover:bg-[#fe5900]/5 transition-colors duration-500" />

                {/* Name */}
                <h3 className="text-lg font-bold text-[#fe5900] mb-4 relative z-10 text-center tracking-wide">
                  {item.name}
                </h3>

                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden flex-1 p-4 bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

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
  );
}
