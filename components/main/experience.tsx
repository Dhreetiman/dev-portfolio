"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaChevronRight, FaRegClock } from "react-icons/fa";
import { EXPERIENCE_DATA } from "@/constants";

export const Experience = () => {
  return (
    <section id="experience" className="w-full flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-0 z-20 relative select-none">
      {/* Subtle animated background SVGs */}
      <svg className="absolute top-0 left-0 w-1/2 h-40 opacity-30 blur-2xl -z-10" viewBox="0 0 400 100" fill="none"><ellipse cx="200" cy="50" rx="200" ry="50" fill="url(#exp-grad1)" /></svg>
      <svg className="absolute bottom-0 right-0 w-1/3 h-32 opacity-20 blur-2xl -z-10" viewBox="0 0 300 80" fill="none"><ellipse cx="150" cy="40" rx="150" ry="40" fill="url(#exp-grad2)" /></svg>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="exp-grad1" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="exp-grad2" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
            Experience
          </h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full origin-left" />
        </div>
        <div className="relative flex flex-col gap-8">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/60 to-cyan-500/10 rounded-full z-0" />
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 bg-gradient-to-br from-[#0f0f26]/80 to-[#1a1a2e]/80 border-2 border-transparent rounded-2xl p-6 md:p-8 shadow-lg hover:border-purple-500/70 transition-all duration-300 group experience-card-glow select-none"
            >
              {/* Timeline dot for desktop */}
              <div className="hidden md:flex flex-col items-center mr-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 border-4 border-white shadow-lg mb-2 animate-pulse-glow flex items-center justify-center">
                  <FaRegClock className="text-white text-base animate-spin-slow" />
                </div>
                {idx !== EXPERIENCE_DATA.length - 1 && (
                  <div className="flex-1 w-1 bg-gradient-to-b from-purple-500/60 to-cyan-500/10 rounded-full" />
                )}
              </div>
              {/* Card content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-lg font-bold text-white">
                    <FaBuilding className="text-purple-400" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaCalendarAlt className="text-purple-400" />
                    <span>{exp.date}</span>
                    <FaMapMarkerAlt className="ml-4 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="text-purple-400 font-semibold text-base md:text-lg mb-2">
                  {exp.title}
                </div>
                <ul className="mb-2 text-gray-300 space-y-2 text-sm md:text-base">
                  {exp.description.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaChevronRight className="mt-1 text-xs text-purple-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-gray-200 rounded-full text-xs md:text-sm border border-[#7042f8]/30 shadow-sm experience-badge-glow">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add CSS for glow and animation
// In your globals.css:
// .experience-card-glow { box-shadow: 0 0 32px 0 rgba(168,85,247,0.08); }
// .experience-badge-glow { box-shadow: 0 0 8px 0 rgba(168,85,247,0.12); }
// .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
// @keyframes pulse-glow { 0%,100%{box-shadow:0 0 0 0 rgba(168,85,247,0.18);} 50%{box-shadow:0 0 16px 4px rgba(168,85,247,0.28);} }
// .animate-spin-slow { animation: spin 6s linear infinite; }
// @keyframes spin { 100% { transform: rotate(360deg); } }