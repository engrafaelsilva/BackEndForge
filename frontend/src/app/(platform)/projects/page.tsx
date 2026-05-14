"use client";

import { FadeIn } from "@/components/animations";
import { ProjectCard } from "@/components/cards";
import { mockRecommendedProject, mockGeneratedProject } from "@/services/mock-data";
import { FolderGit2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [mockRecommendedProject, mockGeneratedProject];

  return (
    <div className="mx-auto max-w-5xl">
      <FadeIn>
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-forge-accent/10 p-2.5">
            <FolderGit2 className="h-5 w-5 text-forge-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-forge-text">Projetos Salvos</h1>
            <p className="text-sm text-forge-text-secondary">
              Todos os projetos que você gerou e salvou.
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.id} href={`/project/${project.id}`}>
            <ProjectCard
              name={project.name}
              description={project.description}
              stack={project.stack}
              score={project.score}
              difficulty={project.difficulty}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
