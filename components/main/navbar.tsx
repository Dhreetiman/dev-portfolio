'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className={`w-full h-[65px] fixed top-0 shadow-lg ${scrolled ? 'shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md' : 'bg-transparent'} transition-all duration-300 ease-in-out z-50 px-4 md:px-10`}>
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <SmoothScrollLink
          href="#about"
          className="flex items-center"
        >
          <div className="cursor-pointer hover:scale-105 transition-transform duration-200">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="md:w-[70px] md:h-[70px]"
              draggable={false}
              priority
            />
          </div>
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300 hover:text-white transition">
            Trithanka Baruah
          </div>
        </SmoothScrollLink>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 backdrop-blur-sm">
            {NAV_LINKS.map((link) => (
              <div key={link.title}>
                {link.link.startsWith("#") ? (
                  <SmoothScrollLink
                    href={link.link}
                    className="cursor-pointer hover:text-[rgb(112,66,248)] transition relative group"
                  >
                    {link.title}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[rgb(112,66,248)] transition-all duration-300 group-hover:w-full"></span>
                  </SmoothScrollLink>
                ) : (
                  <Link
                    href={link.link}
                    className="cursor-pointer hover:text-[rgb(112,66,248)] transition relative group"
                  >
                    {link.title}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[rgb(112,66,248)] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className="transform hover:scale-125 transition duration-300"
            >
              <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)]" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl z-50"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full min-h-screen bg-[#030014]/95 p-8 flex flex-col items-center text-gray-300 md:hidden shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
          {/* Links */}
          <div className="flex flex-col items-center gap-6 mt-8">
            {NAV_LINKS.map((link) => (
              <div key={link.title} className="w-full text-center">
                {link.link.startsWith("#") ? (
                  <SmoothScrollLink
                    href={link.link}
                    className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center text-xl font-medium block py-3"
                  >
                    {link.title}
                  </SmoothScrollLink>
                ) : (
                  <Link
                    href={link.link}
                    className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center text-xl font-medium block py-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-12">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="transform hover:scale-125 transition duration-300"
              >
                <Icon className="h-8 w-8 text-white hover:text-[rgb(112,66,248)] transition" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};