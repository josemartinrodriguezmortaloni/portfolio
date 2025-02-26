"use client";

import { motion } from "framer-motion";

export default function About() {
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
    <div>
      <div className="justify-center text-left text-wrap cursor-pointer rounded-lg p-20 transition-colors backdrop-blur-md backdrop-filter">
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

          <motion.div variants={itemVariants} className="space-y-6 text-lg">
            <p className="font-medium">
              Systems Engineering Student, passionate about Artificial
              Intelligence.
            </p>

            <p className="leading-relaxed">
              My goal is to apply my knowledge to create innovative and
              efficient solutions, using cutting-edge tools such as Python,
              pandas, matplotlib, FAISS, and OpenAI APIs. I specialize in
              implementing AI solutions for information analysis and search,
              creating intelligent systems capable of transforming complex data
              into useful knowledge.
            </p>

            <p className="leading-relaxed">
              I love solving complex problems creatively and efficiently, always
              looking to improve the functionality and efficiency of my
              solutions. I learn best through practical projects and strive to
              stay at the forefront of the latest trends in AI and web
              development. My goal is to bring value to companies looking for a
              proactive professional with an innovation-oriented mindset.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
