import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  description,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-4 border border-aws-orange/30 bg-aws-orange/10 text-aws-orange backdrop-blur-md shadow-sm`}
        >
          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-aws-orange animate-pulse" />}
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
      >
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-aws-orange via-aws-amber to-amber-200 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
