// components/Timeline.tsx
'use client';

import { useState } from 'react';

const timelineData = [
  {
    year: '2018',
    title: 'Primeros pasos en diseño',
    description: 'Descubrí mi pasión por la creación visual'
  },
  {
    year: '2020',
    title: 'Especialización en UI/UX',
    description: 'Certificación en diseño de interfaces'
  },
  {
    year: '2022',
    title: 'Desarrollo Frontend',
    description: 'Transición a desarrollo web profesional'
  },
  {
    year: '2023',
    title: 'Proyectos internacionales',
    description: 'Colaboraciones con clientes globales'
  }
];

export const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="relative py-12">
      <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]" />
      
      {timelineData.map((item, index) => (
        <div 
          key={index}
          className="relative pl-20 pb-10 group"
          onMouseEnter={() => setActiveIndex(index)}
        >
          <div className={`absolute left-0 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${activeIndex === index ? 'border-[var(--accent)] scale-125 bg-[var(--dark)]' : 'border-[var(--primary)]'}`}>
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-[var(--accent)]' : 'bg-[var(--primary)]'}`} />
          </div>
          
          <div className={`transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-70 -translate-x-2'}`}>
            <span className="text-[var(--secondary)] font-mono">{item.year}</span>
            <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
            <p className="text-white/80 mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};