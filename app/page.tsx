import { About } from "@/components/main/about";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { PersonalProjects } from "@/components/main/personal-projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Encryption />
        <PersonalProjects />
      </div>
    </main>
  );
}
