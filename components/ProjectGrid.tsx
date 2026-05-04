"use client";

import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
  onOpen: (project: Project) => void;
}

export default function ProjectGrid({ projects, onOpen }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={i}
          onClick={() => {
            if (!project.externalUrl) onOpen(project);
          }}
        />
      ))}
    </div>
  );
}
