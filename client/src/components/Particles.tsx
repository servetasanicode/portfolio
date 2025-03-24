import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  count?: number;
}

const Particles = ({ count = 50 }: ParticleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    Array.from({ length: count }).forEach(() => {
      const size = Math.random() * 3 + 1;
      const colorIndex = Math.floor(Math.random() * 3);
      const color = colorIndex === 0 ? 'hsl(183, 100%, 50%)' : colorIndex === 1 ? 'hsl(285, 100%, 70%)' : 'hsl(343, 100%, 58%)';
      
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.borderRadius = '50%';
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();
      particle.style.boxShadow = `0 0 ${Math.floor(size * 3)}px ${color}`;
      
      const duration = Math.random() * 50 + 10;
      particle.style.animation = `float ${duration}s linear infinite`;
      particle.style.animationDelay = `-${Math.random() * duration}s`;
      
      container.appendChild(particle);
    });
  }, [count]);

  return (
    <motion.div
      ref={containerRef}
      className="particles fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default Particles;
