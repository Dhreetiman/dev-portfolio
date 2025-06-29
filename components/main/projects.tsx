"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-12 md:py-20 overflow-hidden px-4 md:px-0"
    >
      <h1 className="text-2xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20 text-center">
        My Projects
      </h1>
      
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 md:gap-10 px-4 md:px-10 auto-scroll">
          {/* Duplicate projects for seamless loop */}
          {[...PROJECTS, ...PROJECTS].map((project, index) => (
            <div key={`${project.title}-${index}`} className="w-72 md:w-80 flex-shrink-0">
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
