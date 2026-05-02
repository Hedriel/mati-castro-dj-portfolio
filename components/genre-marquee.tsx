"use client"

import { motion } from "framer-motion"

const genres = [
  "LATIN TECH",
  "GUARACHA",
  "REGGAETON",
  "RKT",
  "FUNK",
  "DEMBOW",
  "CURRENT STYLES & MORE",
]

export function GenreMarquee() {
  // Duplicate the array to create seamless loop
  const duplicatedGenres = [...genres, ...genres, ...genres, ...genres]

  return (
    <div className="relative h-[50px] bg-[#fe5900] overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fe5900] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fe5900] to-transparent z-10" />

      {/* Marquee container */}
      <motion.div
        className="flex items-center h-full whitespace-nowrap"
        animate={{
          x: [0, -50 * genres.length * 4],
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedGenres.map((genre, index) => (
          <div key={index} className="flex items-center">
            <span className="text-black font-bold text-sm sm:text-base tracking-wider px-4">
              {genre}
            </span>
            <span className="text-black/50 text-xl px-2">/</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
