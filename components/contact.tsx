"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Instagram, Mail, MapPin } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";

const WHATSAPP_NUMBER = "541162397047";

const eventTypeLabels: Record<string, string> = {
  corporativo: "Evento Corporativo",
  lanzamiento: "Lanzamiento de Marca",
  privado: "Fiesta Privada",
  "team-building": "Team Building",
  boda: "Boda / Evento Especial",
  otro: "Otro",
};

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    nombre: "",
    empresa: "",
    tipoEvento: "",
    fecha: "",
    mensaje: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "Hola Mati! Me contacto desde tu página web.",
      "",
      `*Nombre:* ${formState.nombre || "No especificado"}`,
      formState.empresa ? `*Empresa:* ${formState.empresa}` : "",
      `*Tipo de evento:* ${eventTypeLabels[formState.tipoEvento] || formState.tipoEvento || "No especificado"}`,
      formState.fecha ? `*Fecha aproximada:* ${formState.fecha.split("-").reverse().join("-")}` : "",
      formState.mensaje ? `*Mensaje:* ${formState.mensaje}` : "",
    ];

    const message = lines.filter(Boolean).join("\n");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#fe5900]/10 via-transparent to-transparent" />

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
            Contacto
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Reserva{" "}
            <span className="text-[#fe5900] neon-text-subtle">tu fecha</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="grid sm:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.nombre}
                    onChange={(e) =>
                      setFormState({ ...formState, nombre: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#fe5900] focus:ring-1 focus:ring-[#fe5900] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={formState.empresa}
                    onChange={(e) =>
                      setFormState({ ...formState, empresa: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#fe5900] focus:ring-1 focus:ring-[#fe5900] transition-colors"
                    placeholder="Nombre de la empresa"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid sm:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Tipo de evento *
                  </label>
                  <select
                    required
                    value={formState.tipoEvento}
                    onChange={(e) =>
                      setFormState({ ...formState, tipoEvento: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#fe5900] focus:ring-1 focus:ring-[#fe5900] transition-colors appearance-none hover:cursor-pointer"
                  >
                    <option value="" className="bg-black">
                      Seleccionar...
                    </option>
                    <option value="corporativo" className="bg-black">
                      Evento Corporativo
                    </option>
                    <option value="lanzamiento" className="bg-black">
                      Lanzamiento de Marca
                    </option>
                    <option value="privado" className="bg-black">
                      Fiesta Privada
                    </option>
                    <option value="team-building" className="bg-black">
                      Team Building
                    </option>
                    <option value="boda" className="bg-black">
                      Boda / Evento Especial
                    </option>
                    <option value="otro" className="bg-black">
                      Otro
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Fecha aproximada
                  </label>
                  <DatePicker
                    value={formState.fecha}
                    onChange={(fecha) => setFormState({ ...formState, fecha })}
                    placeholder="Seleccionar fecha"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  value={formState.mensaje}
                  onChange={(e) =>
                    setFormState({ ...formState, mensaje: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#fe5900] focus:ring-1 focus:ring-[#fe5900] transition-colors resize-none"
                  placeholder="Contame más sobre tu evento..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 bg-[#fe5900] text-black hover:bg-[#ff7733] neon-box-subtle hover:cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar por WhatsApp
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.585 5.932L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Quick contact buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">
                Contacto directo
              </h3>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-black/80 border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all group"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <svg
                    className="w-6 h-6 text-green-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.585 5.932L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-white/60 text-sm">Respuesta inmediata</p>
                </div>
              </motion.a>

              <motion.a
                href="https://instagram.com/maticastrodj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-black/80 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all group"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="text-white font-medium">Instagram</p>
                  <p className="text-white/60 text-sm">@maticastrodj</p>
                </div>
              </motion.a>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fe5900]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#fe5900]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Ubicación</p>
                    <p className="text-white/60 mt-1">
                      Buenos Aires, Argentina
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
