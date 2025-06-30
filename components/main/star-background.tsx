"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useMemo } from "react";
import { Points as ThreePoints } from "three";

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<ThreePoints>(null);
  
  // Optimized: Reduced particle count and memoized positions
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2000), { radius: 1.5 })
  );

  // Memoize additional star layers for better performance
  const additionalStars1 = useMemo(() => 
    random.inSphere(new Float32Array(500), { radius: 1.2 }) as Float32Array, []
  );
  
  const additionalStars2 = useMemo(() => 
    random.inSphere(new Float32Array(500), { radius: 1.4 }) as Float32Array, []
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      // Slower rotation for better performance
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
      <Points
        stride={3}
        positions={additionalStars1}
        {...props}
      >
        <PointMaterial
          transparent
          color="#8778ff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
      <Points
        stride={3}
        positions={additionalStars2}
        {...props}
      >
        <PointMaterial
          transparent
          color="#77ccff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      // Performance optimizations
      gl={{ 
        antialias: false,
        powerPreference: "high-performance",
        stencil: false,
        depth: false
      }}
      // Reduce quality for better performance
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
