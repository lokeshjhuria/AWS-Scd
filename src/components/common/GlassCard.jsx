import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'orange', // 'orange' | 'purple' | 'cyan' | 'blue'
  animate = true,
  delay = 0,
  onClick,
}) => {
  const glowClasses = {
    orange: 'hover:border-aws-orange/40 hover:shadow-glow-orange',
    purple: 'hover:border-purple-500/40 hover:shadow-glow-purple',
    cyan: 'hover:border-cyan-400/40 hover:shadow-glow-cyan',
    blue: 'hover:border-blue-400/40 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.35)]',
  };

  const cardStyle = `
    relative rounded-2xl glass-card p-6 md:p-8
    transition-all duration-300 ease-out
    ${hoverEffect ? `glass-card-hover ${glowClasses[glowColor] || glowClasses.orange}` : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  if (!animate) {
    return (
      <div className={cardStyle} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={cardStyle}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
