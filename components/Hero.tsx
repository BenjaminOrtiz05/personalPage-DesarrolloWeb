// components/Hero.tsx
'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section 
      ref={ref}
      className="relative h-screen overflow-hidden bg-[var(--dark)]"
    >
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-20"
      />
      
      <div className="relative z-10 h-full flex flex-col justify-center px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-[var(--primary)]">Innovación</span> en cada píxel
          </h1>
          <p className="text-xl md:text-2xl text-[var(--secondary)] mb-8">
            Diseño que <span className="underline decoration-[var(--accent)]">cuenta historias</span> y tecnología que las hace posibles
          </p>
          <button className="bg-[var(--primary)] hover:bg-[var(--accent)] transition-all duration-300 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-[var(--primary)/30%]">
            Explora mi trabajo
          </button>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}