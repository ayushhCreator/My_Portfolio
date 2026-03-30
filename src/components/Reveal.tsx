import React from 'react';
import { motion } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, y = 24 }) => {
  const canObserve = typeof window !== 'undefined' && 'IntersectionObserver' in window;

  if (!canObserve) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
