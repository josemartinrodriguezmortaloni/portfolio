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
  {
    id: "4",
    title: "TrustBlock",
    description:
      "TrustBlock is a revolutionary platform that combines the transparency of blockchain technology with the power of crowdfunding to boost businesses, startups, and innovative projects. 🏆 Winner of CryptoVendimia 2025 Emprendethon.",
    longDescription:
      "TrustBlock is a groundbreaking platform that leverages blockchain technology to revolutionize crowdfunding for businesses and innovative projects. By combining transparency, community engagement, and cutting-edge technology, we're democratizing access to business financing.\n\n## 🏆 Recognition\n\n* **Winner of CryptoVendimia 2025 Emprendethon** - Recognized for innovation in blockchain-based crowdfunding solutions\n\n## ✨ Key Features\n\n* **Blockchain-Powered Transparency** - Complete visibility of all transactions and fund movements\n* **Smart Crowdfunding** - Innovative funding mechanisms for businesses and startups\n* **Community Ecosystem** - Active and participatory community supporting innovative projects\n* **Dual Revenue Model** - Transaction fees and PRO subscriptions for sustainability\n\n## 🌟 Our Impact\n\n* **100+ Companies Funded** - Supporting innovative businesses across sectors\n* **50K+ Active Investors** - Growing community of engaged supporters\n* **$1M+ Funds Raised** - Enabling business growth and innovation\n\n## 💼 Business Model\n\n### Transaction Fees\n* 2-3% commission on successful fundraising campaigns\n* Reduced or zero fees for innovative projects\n* Transparent fee structure\n\n### PRO Subscription\n* Premium features at $9.99/month\n* Enhanced verification and visibility\n* Advanced analysis and marketing tools\n* Priority platform positioning\n\n## 🎯 Mission & Values\n\n* **Democratizing Finance** - Breaking down traditional barriers\n* **Innovation Focus** - Supporting projects that drive economic growth\n* **Community-Centric** - Building an active, supportive ecosystem\n* **Complete Transparency** - Full visibility in operations and fund usage\n* **Entrepreneurial Spirit** - Fostering new business development",
    githubUrl: "https://github.com/josemartinrodriguezmortaloni/TrustBlock",
    demoUrl: "https://trust-block.vercel.app/",
  },
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
            className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-4 m-4"
            variants={itemVariants}
          >
            {projects.map((project, index) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <motion.div
                    className={`${
                      index === 0
                        ? "md:col-span-2 md:row-span-2"
                        : index === 1
                        ? "md:col-span-1 md:row-span-1"
                        : index === 2
                        ? "md:col-span-1 md:row-span-1"
                        : "md:col-span-3 md:row-span-1"
                    } group cursor-pointer rounded-lg p-6 hover:border-primary transition-colors backdrop-blur-md backdrop-filter shadow-sm flex flex-col justify-between`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
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
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center text-sm text-primary mt-auto">
                      Read more →
                    </div>
                  </motion.div>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[625px] backdrop-blur-md backdrop-filter shadow-lg rounded-lg">
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

                    <DialogContent className="sm:max-w-[625px] bg-white/50 backdrop-blur-md backdrop-filter border border-white/20 shadow-lg rounded-lg">
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
