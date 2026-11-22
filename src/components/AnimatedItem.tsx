import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

interface AnimatedItemProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up';
  delay?: number;
  className?: string;
}

export default function AnimatedItem({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: AnimatedItemProps) {
  const reduceMotion = useReducedMotion();

  const offset = {
    left: { x: -55, y: 0 },
    right: { x: 55, y: 0 },
    up: { x: 0, y: 35 },
  };

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, ...offset[direction] }
      }
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}