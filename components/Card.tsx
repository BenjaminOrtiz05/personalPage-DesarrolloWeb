// components/Card.tsx

import { PaintBrushIcon } from '../components/Icons';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Card = ({ title, description, icon }: CardProps) => (
  <div className="relative group overflow-hidden rounded-2xl p-8 bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0,_transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-[var(--primary)] text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  </div>
);

// Uso ejemplo:
<Card 
  title="Diseño Impactante" 
  description="Interfaces que dejan huella y generan engagement"
  icon={<PaintBrushIcon className="h-6 w-6" />}
/>