"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaGraduationCap, FaRocket, FaShieldAlt, FaCogs, FaDatabase, FaServer } from "react-icons/fa";

import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
  const expertise = [
    { icon: FaServer, title: "Web Development", desc: "Modern, Scalable Applications" },
    { icon: FaDatabase, title: "Database Design", desc: "MySQL & MongoDB Expertise" },
    { icon: FaShieldAlt, title: "Security", desc: "Auth, Access Control, and Best Practices" },
    { icon: FaCogs, title: "Software Development", desc: "Optimized for Performance & Scale" },
  ];
  

  const quickStats = [
    { label: "Projects", value: "30+" },
    { label: "Experience", value: "3+ Years" },
    { label: "Technologies", value: "18+" },
    { label: "Users Served", value: "100K+" },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-12 md:py-20 z-20 relative"
      id="about-me"
    >
      {/* Background gradient */}
      <div className="absolute top-10 left-0 w-full h-[50%] bg-gradient-to-br from-[#2a0e61]/30 to-transparent rounded-full blur-[120px] -z-10"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full h-full px-4 md:px-10 max-w-7xl mx-auto"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8 md:mb-12"
        >
          About Me
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Profile Card */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-[#0f0f26]/80 to-[#1a1a2e]/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[#2A0E61] relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -left-12 -top-12 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl font-bold text-white">TB</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Trithanka Baruah
                  </h2>
                  <h3 className="text-lg text-purple-400 mb-4">
                    Backend Developer
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Building scalable backend solutions with a focus on performance and security
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {quickStats.map((stat, index) => (
                    <div key={stat.label} className="text-center p-3 bg-[#2a0e61]/30 rounded-lg">
                      <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FaGraduationCap className="text-purple-400" />
                    <h4 className="text-white font-semibold">Education</h4>
                  </div>
                  <div className="bg-[#2a0e61]/20 p-3 rounded-lg">
                    <p className="text-white font-medium">B.Tech CSE</p>
                    <p className="text-gray-400 text-sm">Assam Town Town University</p>
                  </div>
                </div>

                {/* Contact Links */}
                <div className="space-y-2">
                  <Link
                    href="mailto:trithanka.dev@gmail.com"
                    className="flex items-center gap-3 p-2 text-gray-300 hover:text-purple-400 hover:bg-[#2a0e61]/30 rounded-lg transition-all duration-300"
                  >
                    <FaEnvelope className="text-purple-500 flex-shrink-0" />
                    <span className="text-sm truncate">trithanka.dev@gmail.com</span>
                  </Link>
                  <Link
                    href="tel:+918638361258"
                    className="flex items-center gap-3 p-2 text-gray-300 hover:text-purple-400 hover:bg-[#2a0e61]/30 rounded-lg transition-all duration-300"
                  >
                    <FaPhone className="text-purple-500 flex-shrink-0" />
                    <span className="text-sm">+91 8638361258</span>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/trithanka"
                    target="_blank"
                    className="flex items-center gap-3 p-2 text-gray-300 hover:text-purple-400 hover:bg-[#2a0e61]/30 rounded-lg transition-all duration-300"
                  >
                    <FaLinkedin className="text-purple-500 flex-shrink-0" />
                    <span className="text-sm">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/trithanka"
                    target="_blank"
                    className="flex items-center gap-3 p-2 text-gray-300 hover:text-purple-400 hover:bg-[#2a0e61]/30 rounded-lg transition-all duration-300"
                  >
                    <FaGithub className="text-purple-500 flex-shrink-0" />
                    <span className="text-sm">GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expertise & Skills */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {/* Expertise Grid */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaRocket className="text-purple-400" />
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#0f0f26]/50 backdrop-blur-sm p-4 rounded-xl border border-[#2A0E61] hover:border-purple-500 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="text-purple-400 text-lg" />
                        </div>
                        <h4 className="text-white font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-xl border border-purple-500/30">
                    <div className="text-2xl font-bold text-purple-400 mb-1">109K+</div>
                    <div className="text-gray-300 text-sm">Concurrent Users Handled</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-4 rounded-xl border border-cyan-500/30">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">GovTech</div>
                    <div className="text-gray-300 text-sm">Secure Public Infrastructure</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-xl border border-purple-500/30">
                    <div className="text-2xl font-bold text-purple-400 mb-1">Scalable</div>
                    <div className="text-gray-300 text-sm">Database Architecture</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-4 rounded-xl border border-cyan-500/30">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">CI/CD</div>
                    <div className="text-gray-300 text-sm">Workflow Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}; 