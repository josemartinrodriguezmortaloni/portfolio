"use client";
import { motion } from "framer-motion";

interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  achievements?: string[];
}

interface Recognition {
  id: string;
  title: string;
  date: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "AI DEVELOPER",
    company: "JRC SoftCoding Solutions",
    date: "15 January 2025 - Today",
    description:
      "During my internship at JRC SoftCoding Solutions, I have assumed the role of AI Developer, focusing on the creation and enhancement of automation tools to optimize internal processes.",
    achievements: [
      "Development of a Slack Agent: I implemented an agent that facilitates the querying of relevant project information, allowing access to details regarding commits and files in the GitHub repository, as well as managing and administering lists and cards on the Trello Kanban board.",
      "Creation of a PDF Information Extraction Agent: I designed and developed an agent specialized in the automated extraction of data from PDF files, with the objective of efficiently completing forms and improving the management of internal information.",
    ],
  },

  {
    id: "3",
    title: "MENDOSSAT 1 - GROUND SOFTWARE",
    company: "The Mars Society - Nanosatellite",
    date: "2023 - 2024",
    description:
      "Participated in the development of ground software for the MendosSAT 1 nanosatellite, designing and programming of the satellite control system, including telemetry management and orbital tracking.",
  },
];

const recognitions: Recognition[] = [
  {
    id: "1",
    title: "Winner of CryptoVendimia 2025 Emprendethon",
    date: "2025",
    description:
      "Awarded first place in the CryptoVendimia 2025 Emprendethon for TrustBlock, a revolutionary blockchain-based crowdfunding platform.",
  },
];

export default function ExperienceAndRecognition() {
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
    <>
      <div
        id="experience"
        className="justify-center text-left text-wrap cursor-pointer pt-16 md:pt-20 px-4 md:px-6 lg:px-8 rounded-lg transition-colors backdrop-blur-md backdrop-filter"
      >
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-2xl md:text-4xl font-bold mb-2"
            variants={itemVariants}
          >
            Experience
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-primary mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          <motion.div
            className="space-y-6 md:space-y-8"
            variants={itemVariants}
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="rounded-lg p-4 md:p-6 backdrop-blur-md backdrop-filter shadow-sm"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-1">
                  {exp.title}
                </h2>
                <div className="text-primary text-sm md:text-base mb-2">
                  {exp.company}
                </div>
                <div className="text-muted-foreground text-sm mb-4">
                  {exp.date}
                </div>
                <p className="text-sm md:text-base mb-4">{exp.description}</p>
                {exp.achievements && (
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="text-sm md:text-base text-muted-foreground"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      <div
        id="recognition"
        className="justify-center text-left text-wrap cursor-pointer pt-16 md:pt-20 px-4 md:px-6 lg:px-8 rounded-lg transition-colors backdrop-blur-md backdrop-filter"
      >
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-2xl md:text-4xl font-bold mb-2"
            variants={itemVariants}
          >
            Recognition
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-primary mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          <motion.div
            className="space-y-6 md:space-y-8"
            variants={itemVariants}
          >
            {recognitions.map((recognition) => (
              <motion.div
                key={recognition.id}
                className="rounded-lg p-4 md:p-6 backdrop-blur-md backdrop-filter shadow-sm"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-1">
                  🏆 {recognition.title}
                </h2>
                <div className="text-muted-foreground text-sm mb-4">
                  {recognition.date}
                </div>
                <p className="text-sm md:text-base">
                  {recognition.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
