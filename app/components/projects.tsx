"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Markdown } from "@/app/components/markdown";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  date?: string;
  title: string;
  description?: string;
  views?: number;
  longDescription?: string;
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Bot UTN Frm",
    description:
      "AI-powered bot for faculty students that provides course schedules and responds to queries in natural language. Designed to simplify access to academic information through an intuitive conversational interface, helping students navigate their academic journey more efficiently.",
    longDescription:
      "Bot developed by and for students of the faculty, providing course schedules by committee, by subject, tables of a subject, responding in natural language thanks to integration with AI.\n\n## ✨ Features\n\n* **Course Schedules** by committee\n* **Subject Information** with detailed tables\n* **Natural Language** responses via AI integration\n* **Student-Focused** design and functionality\n\n## 🛠️ Technology\n\n* **AI Integration** for natural language processing\n* **Educational API** connections\n* **User-Friendly** interface for students",
    githubUrl: "https://github.com/m4s1t4/botUTNFRM",
  },
  {
    id: "2",
    title: "Slack Agent",
    description:
      "An intelligent Slack chatbot with local AI capabilities using Ollama. Integrates Trello/GitHub, RAG, and custom tools.",
    longDescription:
      "An intelligent Slack chatbot with local AI capabilities using Ollama. Integrates Trello/GitHub, RAG, and custom tools.\n\n## ✨ Main Features\n\n* **Local AI** with Ollama (llama3.2 model)\n* **Trello** Integration (board management)\n* **GitHub** repository exploration\n* **RAG** System (Retrieval Augmented Generation)\n* Persistent conversation history\n* Tools system with function calling\n\n## 🛠️ Technology Stack\n\n* **AI Engine**: Ollama (Local LLM)\n* **Framework**: Slack Bolt\n* **Tools**:\n  * Trello API (py-trello)\n  * PyGithub for GitHub interactions\n  * LangChain for RAG pipelines\n* **Storage**: ChromaDB (vectors)",
    githubUrl: "https://github.com/m4s1t4/Slack-Agent",
  },
  {
    id: "3",
    title: "Open Code Assistant",
    description: "Your pair programming friend",
    longDescription:
      "This project is an open source wizard that uses various tools and APIs to assist in software development. The wizard can perform tasks such as creating and editing files, reading file contents, listing files in a directory, performing web searches, taking screenshots, and more.\n\n## ✨ Key Features\n\n* **File Management** - Create, edit, and read files\n* **Code Assistance** - Intelligent suggestions and improvements\n* **API Integration** - Connect with various development tools\n* **Search Capabilities** - Find resources and documentation\n\n## 🛠️ Technologies Used\n\n* **Modern Web Stack**\n* **AI-powered Analysis**\n* **Development API Integrations**",
    githubUrl: "https://github.com/m4s1t4/Open-Code-Assistant",
  },
  // Add more projects as needed
];

export default function Projects() {
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
      id="projects"
      className="justify-center text-left text-wrap cursor-pointer pt-20 rounded-lg transition-colors backdrop-blur-md backdrop-filter"
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 md:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl font-bold mb-2"
            variants={itemVariants}
          >
            Projects
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-primary mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          <motion.div
            className="grid grid-cols-2 md:grid-cols-2 grid-rows-3 md:grid-rows-3 gap-2 md:gap-2 m-4"
            variants={itemVariants}
          >
            <Dialog key={projects[0].id}>
              <DialogTrigger asChild>
                <motion.div
                  className="col-start-1 row-start-1 row-span-2 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2 group cursor-pointer rounded-lg p-6 hover:border-primary transition-colors backdrop-blur-md backdrop-filter shadow-sm flex flex-col justify-between"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {projects[0].title}
                      </h2>
                      {projects[0].views !== undefined && (
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <ExternalLink className="w-4 h-4" />
                          {projects[0].views.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {projects[0].description && (
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {projects[0].description}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center text-sm text-primary mt-auto">
                    Read more →
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {projects[0].title}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4 space-y-4">
                  {projects[0].longDescription && (
                    <Markdown>{projects[0].longDescription}</Markdown>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    {projects[0].githubUrl && (
                      <Button asChild>
                        <a
                          href={projects[0].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                    {projects[0].demoUrl && (
                      <Button asChild variant="outline">
                        <a
                          href={projects[0].demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog key={projects[1].id}>
              <DialogTrigger asChild>
                <motion.div
                  className="col-start-2 row-start-1 md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-1 group cursor-pointer rounded-lg p-6 hover:border-primary transition-colors backdrop-blur-md backdrop-filter shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {projects[1].title}
                    </h2>
                    {projects[1].views !== undefined && (
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        {projects[1].views.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {projects[1].description && (
                    <p className="text-muted-foreground mb-4">
                      {projects[1].description}
                    </p>
                  )}

                  <div className="flex items-center text-sm text-primary">
                    Read more →
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {projects[1].title}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4 space-y-4">
                  {projects[1].longDescription && (
                    <Markdown>{projects[1].longDescription}</Markdown>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    {projects[1].githubUrl && (
                      <Button asChild>
                        <a
                          href={projects[1].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                    {projects[1].demoUrl && (
                      <Button asChild variant="outline">
                        <a
                          href={projects[1].demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog key={projects[2].id}>
              <DialogTrigger asChild>
                <motion.div
                  className="col-start-2 row-start-2 md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1 group cursor-pointer rounded-lg p-6 hover:border-primary transition-colors backdrop-blur-md backdrop-filter shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {projects[2].title}
                    </h2>
                    {projects[2].views !== undefined && (
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        {projects[2].views.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {projects[2].description && (
                    <p className="text-muted-foreground mb-4">
                      {projects[2].description}
                    </p>
                  )}

                  <div className="flex items-center text-sm text-primary">
                    Read more →
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {projects[2].title}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4 space-y-4">
                  {projects[2].longDescription && (
                    <Markdown>{projects[2].longDescription}</Markdown>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    {projects[2].githubUrl && (
                      <Button asChild>
                        <a
                          href={projects[2].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                    {projects[2].demoUrl && (
                      <Button asChild variant="outline">
                        <a
                          href={projects[2].demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* {projects.length > 3 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">More Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.slice(3).map((project) => (
                  <Dialog key={project.id}>
                    <DialogTrigger asChild>
                      <motion.div
                        className="group cursor-pointer rounded-lg p-6 hover:border-primary transition-colors backdrop-blur-md backdrop-filter shadow-sm"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                            {project.title}
                          </h2>
                          {project.views !== undefined && (
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <ExternalLink className="w-4 h-4" />
                              {project.views.toLocaleString()}
                            </span>
                          )}
                        </div>

                        {project.description && (
                          <p className="text-muted-foreground mb-4">
                            {project.description}
                          </p>
                        )}

                        <div className="flex items-center text-sm text-primary">
                          Read more →
                        </div>
                      </motion.div>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[625px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>

                      <div className="mt-4 space-y-4">
                        {project.longDescription && (
                          <Markdown>{project.longDescription}</Markdown>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3">
                          {project.githubUrl && (
                            <Button asChild>
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Github className="w-4 h-4" />
                                View on GitHub
                              </a>
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button asChild variant="outline">
                              <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </motion.section>
    </div>
  );
}
