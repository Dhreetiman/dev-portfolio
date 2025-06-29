"use client";

import { useEffect, useState } from "react";

export const CSSStarsCanvas = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate 3000 CSS stars instead of 10,000 Three.js particles
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 3000; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          delay: Math.random() * 20
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="w-full h-auto fixed inset-0 -z-10 overflow-hidden">
      {/* Animated stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            opacity: Math.random() * 0.8 + 0.2
          }}
        />
      ))}
      
      {/* Colored star layers for depth */}
      <div className="absolute inset-0">
        {Array.from({ length: 500 }).map((_, i) => (
          <div
            key={`purple-${i}`}
            className="absolute bg-purple-400 rounded-full animate-twinkle-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 30}s`,
              opacity: Math.random() * 0.6 + 0.1
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0">
        {Array.from({ length: 300 }).map((_, i) => (
          <div
            key={`blue-${i}`}
            className="absolute bg-blue-400 rounded-full animate-twinkle-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 25}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>
    </div>
  );
}; 