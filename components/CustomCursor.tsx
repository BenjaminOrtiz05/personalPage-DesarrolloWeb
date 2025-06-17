// components/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Detecta si está sobre un elemento interactivo
      const target = e.target as HTMLElement;
      setIsHovering(
        target.closest('button, a, .interactive') !== null
      );
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-50 ${isHovering ? 'mix-blend-difference' : ''}`}
      animate={{
        x: position.x - (isHovering ? 20 : 10),
        y: position.y - (isHovering ? 20 : 10),
        scale: isHovering ? 2 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      <div className={`rounded-full transition-all duration-300 ${isHovering ? 'w-10 h-10 bg-white' : 'w-5 h-5 bg-[var(--primary)]'}`} />
    </motion.div>
  );
};

// Uso: Añade este componente en tu layout principal