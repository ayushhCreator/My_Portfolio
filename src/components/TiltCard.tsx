import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
};

const TiltCard: React.FC<TiltCardProps> = ({ children, className, maxTilt = 7 }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const pctX = (x / rect.width) * 2 - 1;
    const pctY = (y / rect.height) * 2 - 1;

    setRotate({
      x: -(pctY * maxTilt),
      y: pctX * maxTilt
    });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.015 }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div style={{ transform: 'translateZ(18px)' }}>{children}</div>
    </motion.div>
  );
};

export default TiltCard;
