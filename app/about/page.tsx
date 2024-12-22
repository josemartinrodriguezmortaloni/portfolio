"use client";
import Nav from "../components/navabar";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="fixed inset-0 -z-10">
        <Spline scene="https://prod.spline.design/pPxT3L1E0YD1CCDY/scene.splinecode" />
      </div>
      <div>
        <Nav />
      </div>
      <div className="justify-center text-left text-wrap backdrop-blur-md backdrop-filter rounded-lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Jose Martín Rodriguez Mortaloni
            </h1>
            <motion.div
              className="h-1 w-20 bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p className="font-medium">
              Estudiante de Ingeniería en Sistemas, apasionado por la
              Inteligencia Artificial.
            </p>

            <p className="leading-relaxed">
              Mi objetivo es aplicar mis conocimientos para crear soluciones
              innovadoras y eficientes, utilizando herramientas de vanguardia
              como Python, pandas, matplotlib, FAISS y las API de OpenAI. Me
              especializo en la implementación de soluciones de IA para el
              análisis y la búsqueda de información, creando sistemas
              inteligentes capaces de transformar datos complejos en
              conocimientos útiles.
            </p>

            <p className="leading-relaxed">
              Me encanta resolver problemas complejos de manera creativa y
              eficiente, siempre buscando mejorar la funcionalidad y la
              eficiencia de mis soluciones. Aprendo mejor a través de proyectos
              prácticos y me esfuerzo por mantenerme a la vanguardia de las
              últimas tendencias en IA y desarrollo web. Mi objetivo es aportar
              valor a las empresas que buscan un profesional proactivo y con una
              mentalidad orientada a la innovación.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
