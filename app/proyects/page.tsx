"use client";
import Nav from "../components/navabar";
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
      "AI-powered bot for faculty students that provides course schedules and responds to queries in natural language.",
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
  return (
    <div className="grid bg-[image:'/images/macbook wallpaer.jpeg'] grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <Nav />
      </div>
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="mb-8">Personal Projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer rounded-lg p-6 hover:border-primary transition-colors backdrop-blur-md backdrop-filter ">
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
                  </div>
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
      </section>
    </div>
  );
}
