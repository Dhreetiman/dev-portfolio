'use client';
import { useState } from "react";
import { About } from "@/components/main/about";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { PersonalProjects } from "@/components/main/personal-projects";
import { Skills } from "@/components/main/skills";
import { ContactForm } from "@/components/main/contact-form";
import { WelcomeSplash } from "@/components/main/WelcomeSplash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // When splash finishes, fade in content
  const handleSplashFinish = () => {
    setShowSplash(false);
    setTimeout(() => setShowContent(true), 50); // allow for fade-in
  };

  return (
    <main className="h-full w-full">
      {showSplash && <WelcomeSplash onFinish={handleSplashFinish} />}
      <div
        className={`flex flex-col gap-20 transition-opacity duration-700 ${showSplash ? 'opacity-0' : 'opacity-100'}`}
      >
        {(!showSplash || showContent) && (
          <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Encryption />
            <PersonalProjects />
            <ContactForm />
          </>
        )}
      </div>
    </main>
  );
}
