import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Bubble {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

const CursorBubbles: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newBubble: Bubble = {
        id: crypto.randomUUID(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 20 + 10,
        color: `hsl(${Math.random() * 60 + 340}, 70%, 60%)` // Red to pink range
      };

      setBubbles(prev => [...prev.slice(-15), newBubble]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ 
              opacity: 0.6, 
              scale: 0,
              x: bubble.x,
              y: bubble.y
            }}
            animate={{ 
              opacity: 0,
              scale: 1,
              x: bubble.x + (Math.random() - 0.5) * 100,
              y: bubble.y + (Math.random() - 0.5) * 100 - 50
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut"
            }}
            style={{
              position: 'absolute',
              width: bubble.size,
              height: bubble.size,
              backgroundColor: bubble.color,
              borderRadius: '50%',
              filter: 'blur(2px)',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorBubbles;
