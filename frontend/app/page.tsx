"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Camera, FileCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Camera,
    title: "Fotografía Profesional",
    description: "Fotos precisas y editadas que destacan tu vehículo",
  },
  {
    icon: Shield,
    title: "Revisión Completa",
    description: "Revisión visual, mecánica e historial del vehículo",
  },
  {
    icon: FileCheck,
    title: "Proceso Integral",
    description: "Desde la publicación hasta la transferencia",
  },
  {
    icon: Sparkles,
    title: "Servicio Premium",
    description: "Lavado, mantenimiento y atención personalizada",
  },
];

const stats = [
  { value: "50+", label: "Autos Vendidos" },
  { value: "100%", label: "Satisfacción" },
  { value: "48h", label: "Tiempo Promedio" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
        
        {/* Animated circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-8">
              Automotora Digital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-8 leading-tight"
          >
            Tu casa para
            <br />
            <span className="text-accent">vender tu vehículo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Confianza, seguridad y servicio personalizado.
            <br />
            Vendemos tu auto de principio a fin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/catalogo"
              className="group bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-accent/90 transition-all duration-200 shadow-xl shadow-accent/30 flex items-center justify-center gap-2"
            >
              Ver Catálogo
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contacto"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium text-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              Vender Mi Auto
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-24"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              ¿Qué ofrecemos?
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Servicio completo para que vendas tu auto sin preocupaciones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon
                      size={32}
                      className="text-accent group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-accent font-medium text-lg hover:gap-4 transition-all"
            >
              Ver todos los servicios
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              ¿Listo para vender tu auto?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Contáctanos hoy y descubre lo fácil que es vender con 8cars.
              Te guiamos en cada paso del proceso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl"
            >
              Comenzar Ahora
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}