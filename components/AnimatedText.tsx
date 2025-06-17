// components/AnimatedText.tsx
'use client';

import { motion } from 'framer-motion';

export const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <div className="flex flex-wrap">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
          }}
          className="mr-3 mb-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};