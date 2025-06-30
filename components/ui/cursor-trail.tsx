'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

export const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    const newPoint: TrailPoint = {
      x: e.clientX,
      y: e.clientY,
      id: now + Math.random(),
      timestamp: now,
    };

    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);

    setTrail(prevTrail => {
      // Filter out old points and add new one
      const filteredTrail = prevTrail.filter(point => now - point.timestamp < 1000);
      const newTrail = [newPoint, ...filteredTrail];
      return newTrail.slice(0, 20); // Keep more points for smoother trail
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setTrail([]), 500); // Clear trail after delay
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't add cursor trail on mobile devices

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, isMobile]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Main cursor glow */}
      <motion.div
        className="absolute cursor-trail-element mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 1000,
          restDelta: 0.001,
        }}
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400 blur-[2px] opacity-90 animate-pulse" />
      </motion.div>

      {/* Flowing ribbon SVG */}
      <svg
        className="absolute inset-0 w-full h-full mix-blend-screen"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.8)">
              <animate attributeName="stop-color" values="rgba(236, 72, 153, 0.8);rgba(139, 69, 255, 0.8);rgba(6, 182, 212, 0.8);rgba(236, 72, 153, 0.8)" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="25%" stopColor="rgba(139, 69, 255, 0.7)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.8)" />
            <stop offset="75%" stopColor="rgba(14, 165, 233, 0.7)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.8)">
              <animate attributeName="stop-color" values="rgba(236, 72, 153, 0.8);rgba(6, 182, 212, 0.8);rgba(139, 69, 255, 0.8);rgba(236, 72, 153, 0.8)" dur="2s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <filter id="ribbonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main flowing ribbon */}
        {trail.length > 2 && (
          <motion.path
            d={`M ${trail
              .slice(0, 12)
              .map((point, index) => {
                const offset = Math.sin(Date.now() * 0.001 + index * 0.5) * 3;
                return `${index === 0 ? 'M' : 'L'} ${point.x + offset} ${point.y + offset}`;
              })
              .join(' ')}`}
            stroke="url(#ribbonGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ribbonGlow)"
            opacity={0.9}
          />
        )}
        
        {/* Secondary ribbon layer for depth */}
        {trail.length > 3 && (
          <motion.path
            d={`M ${trail
              .slice(1, 10)
              .map((point, index) => {
                const offset = Math.cos(Date.now() * 0.0015 + index * 0.7) * 2;
                return `${index === 0 ? 'M' : 'L'} ${point.x + offset} ${point.y + offset}`;
              })
              .join(' ')}`}
            stroke="url(#ribbonGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ribbonGlow)"
            opacity={0.6}
          />
        )}
      </svg>

      {/* Enhanced trail particles */}
      {trail.slice(0, 8).map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute cursor-trail-element"
          initial={{
            x: point.x - 6,
            y: point.y - 6,
            scale: 1,
            opacity: 0.9,
          }}
          animate={{
            x: point.x - 6 + Math.sin(Date.now() * 0.002 + index) * 2,
            y: point.y - 6 + Math.cos(Date.now() * 0.002 + index) * 2,
            scale: Math.max(0.2, 1 - index * 0.1),
            opacity: Math.max(0, 0.9 - index * 0.1),
          }}
          exit={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 400,
            restDelta: 0.001,
          }}
        >
          <div
            className="w-3 h-3 rounded-full mix-blend-screen"
            style={{
              background: `radial-gradient(circle, 
                hsl(${300 + index * 15}, 85%, 65%) 0%, 
                hsl(${200 + index * 20}, 85%, 65%) 50%, 
                transparent 100%)`,
              filter: 'blur(1px)',
            }}
          />
        </motion.div>
      ))}

      {/* Sparkling particles */}
      {trail.slice(0, 3).map((point, index) => (
        <motion.div
          key={`sparkle-${point.id}`}
          className="absolute cursor-trail-element"
          initial={{
            x: point.x + (Math.random() - 0.5) * 40,
            y: point.y + (Math.random() - 0.5) * 40,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: point.x + (Math.random() - 0.5) * 60,
            y: point.y + (Math.random() - 0.5) * 60,
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          <div
            className="w-1 h-1 rounded-full"
            style={{
              background: `hsl(${280 + index * 30}, 90%, 70%)`,
              boxShadow: `0 0 8px hsl(${280 + index * 30}, 90%, 70%), 0 0 16px hsl(${280 + index * 30}, 90%, 70%)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}; 