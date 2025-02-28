import { ProjectCard } from "./ProjectCard";
import { ProjectHero } from "./ProjectsHero";
import { useMemo } from "react";

function ProjectSection() {
  const projects = useMemo(
    () => [
      {
        id: 1,
        img: "/imgs/cyber-academy.png",
        title: "Cyber Academy",
        description:
          "This is a cyber academy website that just launched for students to learn crypto.",
        link: "https://cyber.xposureverse.com/",
      },
      {
        id: 2,
        img: "/imgs/defendo.png",
        title: "Defendo",
        description:
          "This is an Ecommerce Fashion brand that sells clothes and fashion accessories.",
        link: "https://shopdefendo.com/",
      },
      {
        id: 3,
        img: "/imgs/xpoverse.png",
        title: "Xpoverse",
        description: "This is an Xpoverse crypto exchange wallet website.",
        link: "https://xposureverse.com/",
      },
      {
        id: 4,
        img: "/imgs/quiz-app.png",
        title: "Family Guy Quiz App",
        description: "This is a quiz app that asks user questions.",
        link: "https://family-guy-quiz.vercel.app/",
      },
      {
        id: 5,
        img: "/imgs/designinn.png",
        title: "Designinn",
        description: "This is a website about  constructor, architecture, developer & designer company.",
        link: "https://www.designinn.com.pk/",
      },
      {
        id: 6,
        img: "/imgs/kfc-clone.png",
        title: "KFC-Clone",
        description: "This is a clone of a KFC website.",
        link: "https://kfc-clone-react-app.vercel.app/",
      },
    ],
    []
  );

  return (
    <section
      className="projects flex flex-col items-center justify-around py-20 px-6 sm:px-12"
      aria-label="Projects Section"
    >
      <ProjectHero />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
