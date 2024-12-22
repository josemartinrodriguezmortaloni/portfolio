"use client";
import Nav from "../components/navabar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Spline from "@splinetool/react-spline";
interface Project {
  id: string;
  date: string;
  title: string;
  description: string;
  views: number;
  longDescription: string;
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: "1",
    date: "Jul 1, 2023",
    title: "Project One",
    description:
      "A brief description of the first project that shows on the card.",
    views: 22000,
    longDescription:
      "A more detailed description of the project that appears in the modal when clicked. This can be multiple paragraphs long and include technical details.",
    githubUrl: "https://github.com/username/project-one",
    demoUrl: "https://demo.project-one.com",
  },
  {
    id: "2",
    date: "Apr 1, 2023",
    title: "Project Two",
    description:
      "A brief description of the second project that shows on the card.",
    views: 18000,
    longDescription:
      "A more detailed description of the second project. This appears when the user clicks on the project card.",
    githubUrl: "https://github.com/username/project-two",
    demoUrl: "https://demo.project-two.com",
  },
  {
    id: "3",
    date: "Apr 4, 2023",
    title: "Project Three",
    description:
      "A brief description of the second project that shows on the card.",
    views: 18000,
    longDescription:
      "A more detailed description of the second project. This appears when the user clicks on the project card.",
    githubUrl: "https://github.com/username/project-two",
    demoUrl: "https://demo.project-two.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="fixed inset-0 -z-10">
        <Spline scene="https://prod.spline.design/uXvHfVlOgdQ6R0fQ/scene.splinecode" />
      </div>
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
                  <div className="group cursor-pointer rounded-lg p-6 hover:border-primary transition-colors backdrop-blur-md backdrop-filter">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        {project.views.toLocaleString()}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

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
                    <p className="text-muted-foreground">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
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
