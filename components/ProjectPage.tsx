"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectStory from "./ProjectStory";
import JugaadFullScreen from "./projects/JugaadFullScreen";

const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectPage({ project, onClose }: Props) {
  // ESC closes
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-page"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.55, ease: EASE_DRAWER }}
          className={`fixed inset-0 z-50 bg-black ${
            project.slug === "jugaad" ? "overflow-hidden" : "overflow-y-auto"
          }`}
        >
          {project.slug === "jugaad" ? (
            <JugaadFullScreen project={project} onClose={onClose} />
          ) : (
            <ProjectStory project={project} onClose={onClose} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
