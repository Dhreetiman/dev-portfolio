"use client";

import { motion } from "framer-motion";
import { PersonalProjectCard } from "@/components/sub/personal-project-card";
import { PERSONAL_PROJECTS } from "@/constants";
import { FaRocket, FaUsers, FaCode, FaAward } from "react-icons/fa";

export const PersonalProjects = () => {
  const stats = [
    { icon: FaRocket, label: "Projects", value: PERSONAL_PROJECTS.length },
    { icon: FaUsers, label: "Users Served", value: "10K+" },
    { icon: FaCode, label: "Technologies", value: "15+" },
    { icon: FaAward, label: "Experience", value: "2+ Years" }
  ];

  return (
    <section
      id="personal-projects"
      className="flex flex-col items-center justify-center py-12 md:py-20 overflow-hidden px-4 md:px-0 relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400/30 rounded-full animate-float-particle"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400/40 rounded-full animate-float-particle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-500/20 rounded-full animate-float-particle" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-cyan-500/30 rounded-full animate-float-particle" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400/25 rounded-full animate-float-particle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/35 rounded-full animate-float-particle" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 md:py-10 lg:py-16 animate-gradient"
          >
            Personal Projects
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8"
          >
            Showcasing my expertise in building scalable backend solutions and innovative applications
          </motion.p>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mx-auto mb-2 animate-pulse-glow">
                  <stat.icon className="text-purple-400 text-lg md:text-xl" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="w-full px-4 md:px-10 overflow-hidden relative z-10">
        {/* Auto-scrolling container */}
        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex space-x-4 md:space-x-6 auto-scroll"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Duplicate projects for seamless loop */}
            {[...PERSONAL_PROJECTS, ...PERSONAL_PROJECTS].map((project, index) => (
              <motion.div 
                key={`${project.title}-${index}`} 
                className="flex-none w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <PersonalProjectCard
                  project={{
                    title: project.title,
                    date: project.date,
                    description: project.description,
                    technologies: [...project.technologies]
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-12 md:mt-16 relative z-10"
      >
        <p className="text-gray-400 text-sm md:text-base mb-4">
          Interested in collaborating or learning more about my work?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.a
            href="#about-me"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-medium hover:scale-105 transition-all duration-300 hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="https://github.com/trithanka"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-purple-500 text-purple-400 rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300 hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View GitHub
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}; 