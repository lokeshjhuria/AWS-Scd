import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sparkles, Zap, ShieldCheck, Terminal, Award, Layers } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { eventConfig } from '../../config/eventConfig';

const iconMap = {
  Cloud,
  Sparkles,
  Zap,
  ShieldCheck,
  Terminal,
  Award,
};

export const HighlightsSection = () => {
  return (
    <section id="highlights" className="relative py-20 bg-aws-dark overflow-hidden border-t border-slate-800/60">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-aws-orange/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Curated Technical Tracks"
          badgeIcon={Layers}
          title="What You’ll Experience at"
          highlight="I²IT Community Day"
          description="From bedrock cloud fundamentals to advanced generative AI and automated DevSecOps pipelines, our tracks are tailor-made for practical developer growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventConfig.highlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || Cloud;
            const glowColor = idx % 2 === 0 ? 'orange' : 'purple';

            return (
              <GlassCard
                key={item.id}
                delay={idx * 0.1}
                glowColor={glowColor}
                className="flex flex-col justify-between group"
              >
                <div>
                  {/* Category Chip & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-slate-800/90 text-slate-300 border border-slate-700/80">
                      {item.category}
                    </span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${item.accent}15`,
                        border: `1px solid ${item.accent}40`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.accent }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Topics Tag List */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0B0F19] text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
