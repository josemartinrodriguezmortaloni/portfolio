"use client";

import Nav from "./components/navabar";
import { motion } from "framer-motion";

export default function Home() {
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
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundColor: "#000",
          backgroundImage: "url('/images/macbook wallpaer.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div>
        <Nav />
      </div>
      <main className="justify-center text-left text-wrap cursor-pointer rounded-lg p-6 transition-colors backdrop-blur-md backdrop-filter"></main>
    </div>
  );
}
