"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({
      nombre: "",
      empresa: "",
      tipoEvento: "",
      fecha: "",
      mensaje: "",
    });
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
    <section id="contacto" className="py-24 bg-black relative overflow-hidden">
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
            Hagamos{" "}
            <span className="text-[#fe5900] neon-text-subtle">tu evento</span>
          </motion.h2>
          <motion.p
            className="text-lg text-white/60 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contame sobre tu evento y te respondo en menos de 24 horas con una
            propuesta personalizada.
          </motion.p>
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#fe5900] focus:ring-1 focus:ring-[#fe5900] transition-colors"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#fe5900] focus:ring-1 focus:ring-[#fe5900] transition-colors"
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
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#fe5900] focus:ring-1 focus:ring-[#fe5900] transition-colors appearance-none"
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
                  <input
                    type="date"
                    value={formState.fecha}
                    onChange={(e) =>
                      setFormState({ ...formState, fecha: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#fe5900] focus:ring-1 focus:ring-[#fe5900] transition-colors"
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
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#fe5900] focus:ring-1 focus:ring-[#fe5900] transition-colors resize-none"
                  placeholder="Contame más sobre tu evento..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-[#fe5900] text-black hover:bg-[#ff7733] neon-box-subtle"
                  }`}
                  whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitted ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ) : isSubmitted ? (
                    "¡Mensaje enviado!"
                  ) : (
                    <>
                      Enviar consulta
                      <Send className="w-5 h-5" />
                    </>
                  )}
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
                href="https://wa.me/5491123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all group"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-500" />
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
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all group"
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
