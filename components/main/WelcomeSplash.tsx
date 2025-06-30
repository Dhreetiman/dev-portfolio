"use client";

import { useEffect, useState } from "react";
import { StarsCanvas } from "./star-background";

const welcomes = [
  { text: "Welcome" },
  { text: "स्वागत है" }, // Hindi
  { text: "স্বাগতম" }, // Assamese
  { text: "வரவேற்கிறேன்" }, // Tamil
  { text: "स्वागत आहे" }, // Marathi
  { text: "स्वागतम्" }, // Sanskrit
  { text: "স্বাগতম" }, // Bengali
  { text: "ಸ್ವಾಗತ" } // Kannada
];

export const WelcomeSplash = ({ onFinish }: { onFinish: () => void }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [fadeLang, setFadeLang] = useState(false);

  useEffect(() => {
    if (index < welcomes.length - 1) {
      setFadeLang(false);
      const fadeOutTimer = setTimeout(() => setFadeLang(true), 120); // show, then fade out
      const nextTimer = setTimeout(() => setIndex(index + 1), 200); // after fade, next
      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(nextTimer);
      };
    } else {
      // After last language, keep splash for 400ms, then fade out over 600ms
      const fadeTimer = setTimeout(() => setFade(true), 400);
      const finishTimer = setTimeout(onFinish, 1000); // fade out duration
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [index, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] w-full min-h-screen flex items-center justify-center transition-opacity duration-600 bg-black overflow-hidden ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <StarsCanvas />
      <div
        className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center transition-opacity duration-200 ${
          fadeLang ? "opacity-0" : "opacity-100"
        }`}
      >
        {welcomes[index].text}
      </div>
    </div>
  );
};

// Add this to your global CSS if not present:
// .animate-fade-in { animation: fadeIn 0.5s; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } 