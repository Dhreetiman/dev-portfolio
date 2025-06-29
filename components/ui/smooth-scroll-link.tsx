"use client";

import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const SmoothScrollLink = ({ href, children, className = "" }: SmoothScrollLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Extract the path and hash parts
    const [path, hash] = href.split("#");
    const targetPath = path || "/";
    
    // If we're already on the correct path, just scroll to the element
    if ((pathname === targetPath || (targetPath === "/" && pathname === "")) && hash) {
      // Smooth scroll to element with offset for fixed navbar
      const element = document.getElementById(hash);
      if (element) {
        const navbarHeight = 65; // Height of your fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      // Update URL without reload
      history.pushState(null, "", href);
    } else {
      // Navigate to the new page first
      router.push(targetPath);
      
      // After navigation, scroll to hash if it exists
      if (hash) {
        // Wait for page to load
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navbarHeight = 65; // Height of your fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      }
    }
  };
  
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}; 