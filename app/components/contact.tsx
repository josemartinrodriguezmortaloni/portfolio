"use client";
import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
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
    <div
      id="contact"
      className="justify-center text-left text-wrap cursor-pointer rounded-lg transition-colors backdrop-blur-md backdrop-filter pt-28 md:pt-32"
    >
      <div className="justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 p-6 rounded-lg shadow-sm max-w-md w-full cursor-pointer hover:border-primary transition-colors backdrop-blur-md backdrop-filter "
        >
          <motion.h1
            className="text-3xl font-bold mb-6 text-center"
            variants={itemVariants}
          >
            Contact
          </motion.h1>
          <motion.div className="space-y-4" variants={itemVariants}>
            <Link
              href="https://twitter.com/tu_usuario"
              className="flex items-center space-x-3 p-3 rounded-lg hover:text-zinc-600 transition duration-300"
            >
              <Twitter className="w-6 h-6 text-black" />
              <span>Follow me on X (Twitter)</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/josemrodriguezm?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiK%2B8npSsSXCtYw7zbqys0g%3D%3D"
              className="flex items-center space-x-3 p-3 rounded-lg hover:text-zinc-600 transition duration-300"
            >
              <Linkedin className="w-6 h-6 text-black" />
              <span>Connect on LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/m4s1t4"
              className="flex items-center space-x-3 p-3 rounded-lg hover:text-zinc-600 transition duration-300"
            >
              <Github className="w-6 h-6 text-black" />
              <span>Check my projects on GitHub</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
