import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaRocket, FaShieldAlt, FaBrain, FaCogs } from "react-icons/fa";

type PersonalProjectCardProps = {
  project: {
    title: string;
    date: string;
    description: string;
    technologies: string[];
  };
};

// Icon mapping for different project types
const getProjectIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('portal') || lowerTitle.includes('job')) return FaUsers;
  if (lowerTitle.includes('hrms') || lowerTitle.includes('hr')) return FaCogs;
  if (lowerTitle.includes('ai') || lowerTitle.includes('chatbot')) return FaBrain;
  if (lowerTitle.includes('government') || lowerTitle.includes('national')) return FaShieldAlt;
  return FaRocket;
};

// Get project category color
const getProjectColor = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('portal') || lowerTitle.includes('job')) return 'from-blue-500 to-cyan-500';
  if (lowerTitle.includes('hrms') || lowerTitle.includes('hr')) return 'from-purple-500 to-pink-500';
  if (lowerTitle.includes('ai') || lowerTitle.includes('chatbot')) return 'from-green-500 to-emerald-500';
  if (lowerTitle.includes('government') || lowerTitle.includes('national')) return 'from-orange-500 to-red-500';
  return 'from-purple-500 to-cyan-500';
};

// Shorten description
const shortenDescription = (description: string, maxLength: number = 120) => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength).trim() + '...';
};

export const PersonalProjectCard = ({ project }: PersonalProjectCardProps) => {
  const ProjectIcon = getProjectIcon(project.title);
  const gradientClass = getProjectColor(project.title);
  const shortDescription = shortenDescription(project.description);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden rounded-xl shadow-xl border border-[#2A0E61] flex flex-col h-full min-h-[380px] md:min-h-[420px] bg-gradient-to-br from-[#0f0f26]/80 to-[#1a1a2e]/80 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 group"
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Header with icon and gradient */}
      <div className={`relative bg-gradient-to-r ${gradientClass} h-[100px] md:h-[120px] flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center gap-3 px-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ProjectIcon className="text-white text-xl md:text-2xl" />
          </div>
          <div className="flex-1">
            <h1 className="text-lg md:text-xl font-bold text-white leading-tight">{project.title}</h1>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative p-4 md:p-5 flex-1 flex flex-col">
        {/* Date badge */}
        <div className="flex items-center gap-2 mb-3">
          <FaCalendarAlt className="text-purple-400 text-sm" />
          <span className="text-purple-400 text-xs md:text-sm font-medium bg-purple-500/10 px-2 py-1 rounded-full">
            {project.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 flex-grow text-sm md:text-base leading-relaxed mb-4">
          {shortDescription}
        </p>
        
        {/* Key features */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
            <span className="text-xs text-gray-400 font-medium">Key Features</span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-xs text-gray-500">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <div key={index} className="flex items-center gap-1">
                <div className="w-1 h-1 bg-purple-500/50 rounded-full"></div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technology tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-[#2a0e61]/50 text-gray-300 rounded-full text-xs border border-[#7042f8]/30 hover:border-[#7042f8]/60 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-[#2a0e61]/30 text-gray-500 rounded-full text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-4 pt-3 border-t border-[#2A0E61]/50">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-[#7042f8]/20 hover:bg-[#7042f8]/30 text-purple-300 rounded-lg text-xs font-medium transition-all duration-300 group/btn">
            <FaGithub className="text-sm group-hover/btn:scale-110 transition-transform" />
            View Code
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-[#2a0e61]/50 hover:bg-[#2a0e61]/70 text-gray-300 rounded-lg text-xs font-medium transition-all duration-300 group/btn">
            <FaExternalLinkAlt className="text-sm group-hover/btn:scale-110 transition-transform" />
            Live Demo
          </button>
        </div>
      </div>

      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
    </motion.div>
  );
}; 