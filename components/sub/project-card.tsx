import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f8] transition-all duration-300"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-3 md:p-4">
        <h1 className="text-lg md:text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-1 md:mt-2 text-gray-300 text-sm md:text-base">{description}</p>
      </div>
    </Link>
  );
};
