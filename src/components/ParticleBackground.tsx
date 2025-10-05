import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ParticlesProps {
  mousePosition: { x: number; y: number };
}

function Particles({ mousePosition }: ParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);

  const particlesCount = 10000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * 0.05;
    ref.current.rotation.y = time * 0.075;

    // Mouse interaction
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      
      const mouseX = (mousePosition.x / window.innerWidth - 0.5) * 20;
      const mouseY = -(mousePosition.y / window.innerHeight - 0.5) * 20;
      
      const dx = mouseX - x;
      const dy = mouseY - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 5) {
        positions[i3] += dx * 0.02;
        positions[i3 + 1] += dy * 0.02;
      } else {
        // Drift back to original position
        positions[i3] += (Math.sin(time + i) * 0.001);
        positions[i3 + 1] += (Math.cos(time + i) * 0.001);
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={hovered ? "#00ffff" : "#a855f7"}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export const ParticleBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};
