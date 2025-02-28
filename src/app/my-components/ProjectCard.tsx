"use client";

import { Lens } from "@/components/ui/lens";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useCallback } from "react";

interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({ project }: { project: Project }) {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = useCallback(() => setHovering(true), []);
  const handleMouseLeave = useCallback(() => setHovering(false), []);

  const truncatedDescription = useMemo(() => {
    return project.description.length > 100
      ? project.description.substring(0, 100) + "..."
      : project.description;
  }, [project.description]);

  return (
    <motion.div
      className="w-full max-w-[450px] sm:max-w-[500px] h-[380px] relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-0 my-4 flex flex-col transition-transform hover:scale-105"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-[280px]">
        <Lens hovering={hovering} setHovering={setHovering}>
          <Image
            src={project.img}
            alt={`Screenshot of ${project.title} project`}
            width={600}
            height={800}
            className="rounded-2xl w-full object-contain transition-all duration-300 hover:brightness-110"
            loading="lazy"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Lens>
      </div>

      {/* Content Section */}
      <motion.div
        className="p-6 relative z-20 flex flex-col flex-grow justify-between h-full"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <div>
          <h2 className="text-white text-2xl font-bold">{project.title}</h2>
          <p className="text-neutral-300 mt-2 min-h-[60px]">{truncatedDescription}</p>
        </div>

        <Link href={project.link} target="_blank">
          <button
            aria-label={`View project: ${project.title}`}
            className="p-2 rounded-xl mt-6 text-center bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold w-full"
          >
            View Project
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
