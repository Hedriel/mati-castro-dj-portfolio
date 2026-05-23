"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Music2, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/maticastrodj",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@maticastrodj",
    label: "YouTube",
  },
  {
    icon: Music2,
    href: "https://soundcloud.com/maticastrodj",
    label: "SoundCloud",
  },
  { icon: Mail, href: "mailto:contacto@maticastro.com", label: "Email" },
];

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Setup", href: "#setup" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#fe5900]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo & Description */}
          <div className="space-y-4">
            <motion.a
              href="#inicio"
              className="text-3xl font-black tracking-tight text-[#fe5900] neon-text-subtle inline-block"
              whileHover={{ scale: 1.05 }}
            >
              MATI CASTRO
            </motion.a>
            <p className="text-white/60 leading-relaxed">
              DJ profesional especializado en eventos corporativos y
              experiencias premium. Transformando cada evento en un momento
              inolvidable.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <h4 className="text-white font-bold mb-4">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-[#fe5900] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h4 className="text-white font-bold mb-4">Seguime</h4>
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#fe5900] hover:border-[#fe5900] transition-colors group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/60 group-hover:text-black transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Mati Castro. Todos los derechos
            reservados.
          </p>
          <motion.a
            href="#contacto"
            className="px-6 py-2 bg-[#fe5900] text-black font-bold rounded-full text-sm hover:bg-[#ff7733] transition-colors neon-box-subtle"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reservar Fecha
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
