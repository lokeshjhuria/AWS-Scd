import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic2, ExternalLink, Info, Sparkles, UserCheck } from 'lucide-react';
import { LinkedinIcon } from '../common/SocialIcons';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { SpeakerModal } from './SpeakerModal';
import { eventConfig } from '../../config/eventConfig';

export const SpeakersSection = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  return (
    <section id="speakers" className="relative py-20 bg-aws-dark overflow-hidden border-t border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-aws-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Distinguished Lineup"
          badgeIcon={Mic2}
          title="Cloud Leaders &"
          highlight="Community Speakers"
          description="Learn directly from seasoned AWS architects, community contributors, and student developers sharing real-world engineering experiences."
        />

        {/* Tentative Lineup Notice */}
        <div className="mb-10 max-w-3xl mx-auto p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 flex items-start gap-3 backdrop-blur-md">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-amber-300">Call for Speakers in Progress:</strong> {eventConfig.speakersNote}
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventConfig.speakers.map((speaker, index) => (
            <GlassCard
              key={speaker.id}
              delay={index * 0.1}
              glowColor={index % 2 === 0 ? 'orange' : 'purple'}
              className="flex flex-col justify-between group"
            >
              <div>
                {/* Avatar Placeholder with futuristic styling */}
                <div className="relative mb-5 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-800 border-2 border-slate-700/80 group-hover:border-aws-orange/60 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105">
                    <span className="text-2xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-aws-orange via-amber-300 to-purple-400">
                      {speaker.avatarPlaceholder}
                    </span>
                  </div>
                  <span className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-900 text-slate-300 border border-slate-700 shadow-sm whitespace-nowrap">
                    {speaker.status.includes('Student') ? 'Student Slot' : 'Industry Lead'}
                  </span>
                </div>

                {/* Speaker info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors font-sans">
                    {speaker.name}
                  </h3>
                  <p className="text-xs font-semibold text-aws-orange mt-0.5">{speaker.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{speaker.organization}</p>
                </div>

                {/* Topic snippet */}
                <div className="p-3 rounded-xl bg-[#090D14] border border-slate-800/80 mb-4">
                  <span className="text-[10px] font-mono font-semibold uppercase text-slate-500 block mb-1">
                    Talk Topic:
                  </span>
                  <p className="text-xs font-medium text-slate-200 line-clamp-2 leading-relaxed">
                    {speaker.topic}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {speaker.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/60 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/70 hover:bg-slate-700/80 border border-slate-700/60 transition-colors"
                >
                  Session Details
                </button>

                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800 border border-slate-700/40 transition-colors"
                  aria-label={`LinkedIn for ${speaker.name}`}
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Speaker Modal */}
        <SpeakerModal
          speaker={selectedSpeaker}
          isOpen={!!selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      </div>
    </section>
  );
};
