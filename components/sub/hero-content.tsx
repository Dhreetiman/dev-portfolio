"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-20 mt-8 md:mt-16 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[8px] md:py-[10px] md:px-[10px] border border-[#7042f88b] opacity-[0.9] flex items-center justify-center md:justify-start"
        >
          <SparklesIcon className="text-[#b49bff] mr-[8px] md:mr-[10px] h-4 w-4 md:h-5 md:w-5" />
          <h1 className="Welcome-text text-[13px] md:text-[15px] font-semibold">
            Software Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Trithanka
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px] leading-relaxed"
        >
          Experienced Software developer with a flair for innovation and a dedication to creating seamless user experiences. I thrive on turning ideas into impactful digital experiences that resonate with users.
        </motion.p>

        <motion.div 
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-3 md:gap-4"
        >
          <a
            href="#personal-projects"
            className="py-2.5 md:py-3 px-4 md:px-6 button-primary text-center text-white font-medium cursor-pointer rounded-full hover:scale-105 transition duration-300 max-w-[200px] text-sm md:text-base"
          >
            View My Work
          </a>
          <a
            href="#about-me"
            className="py-2.5 md:py-3 px-4 md:px-6 border border-[#7042f88b] bg-transparent text-center text-white font-medium cursor-pointer rounded-full hover:bg-[#7042f81a] transition duration-300 max-w-[200px] text-sm md:text-base"
          >
            About Me
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-8 md:mt-0"
      >
        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[650px] md:h-[650px]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>
          <Image
            src="/hero-bg.svg"
            alt="Developer illustration"
            height={650}
            width={650}
            draggable={false}
            className="select-none animate-float relative z-10 w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
