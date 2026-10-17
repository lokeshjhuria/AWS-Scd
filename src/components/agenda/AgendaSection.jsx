import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Tag, Filter, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { eventConfig } from '../../config/eventConfig';

export const AgendaSection = () => {
  const [activeTrack, setActiveTrack] = useState('all');

  const tracks = [
    { id: 'all', label: 'All Sessions' },
    { id: 'keynote', label: 'Keynotes' },
    { id: 'technical', label: 'Technical Deep Dives' },
    { id: 'workshop', label: 'Hands-on Labs' },
    { id: 'community', label: 'Community & Careers' },
  ];

  const filteredAgenda = eventConfig.agenda.filter((session) => {
    if (activeTrack === 'all') return true;
    return session.type.toLowerCase() === activeTrack.toLowerCase();
  });

  const getTrackBadgeStyle = (type) => {
    switch (type) {
      case 'keynote':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'technical':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'workshop':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'community':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      default:
        return 'bg-slate-700/30 text-slate-400 border-slate-700/50';
    }
  };

  return (
    <section id="agenda" className="relative py-20 bg-[#070A0F] overflow-hidden border-t border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-aws-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Event Schedule"
          badgeIcon={Clock}
          title="Full Day Technical"
          highlight="Symposium Agenda"
          description="A carefully structured single-day timeline featuring inspirational keynotes, cloud architecture masterclasses, hands-on serverless coding, and career networking."
        />

        {/* Date & Track Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-sm text-slate-300 font-mono">
            <Calendar className="w-4 h-4 text-aws-orange" />
            <span>{eventConfig.dateDisplay}</span>
            <span className="text-slate-500">•</span>
            <span className="text-aws-amber">{eventConfig.timeDisplay}</span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTrack === track.id
                    ? 'bg-aws-orange text-black font-bold shadow-glow-orange'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="relative">
          {/* Vertical line indicator */}
          <div className="absolute left-4 sm:left-32 top-4 bottom-4 w-0.5 bg-gradient-to-b from-aws-orange via-purple-500 to-slate-800 hidden sm:block" />

          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredAgenda.map((item, index) => (
                <motion.div
                  key={`${item.time}-${item.title}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative sm:pl-44"
                >
                  {/* Desktop Time Column */}
                  <div className="sm:absolute sm:left-0 sm:top-5 sm:w-28 text-left sm:text-right mb-2 sm:mb-0">
                    <span className="inline-block text-xs sm:text-sm font-mono font-bold text-aws-orange">
                      {item.time.split('–')[0].trim()}
                    </span>
                    <span className="block text-[11px] font-mono text-slate-400">
                      {item.time.includes('–') ? item.time.split('–')[1].trim() : ''}
                    </span>
                  </div>

                  {/* Bullet node on the timeline */}
                  <div className="absolute left-32 top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#080B11] border-2 border-aws-orange shadow-glow-orange hidden sm:block" />

                  {/* Session Card */}
                  <div className="rounded-2xl glass-card p-5 sm:p-6 hover:border-slate-700 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold border ${getTrackBadgeStyle(
                            item.type
                          )}`}
                        >
                          {item.badge || item.track}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {item.venue}
                        </span>
                      </div>

                      {/* Mobile time display */}
                      <span className="sm:hidden text-xs font-mono font-bold text-aws-orange bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                        {item.time}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-sans">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs">
                      <div className="flex items-center gap-2 text-slate-300 font-medium">
                        <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-aws-orange font-bold">
                          {item.speaker.charAt(0)}
                        </div>
                        <span>{item.speaker}</span>
                      </div>

                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Track: {item.track}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Schedule footnote */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400">
          <p>
            * Agenda session timings and guest speaker allocations are subject to minor adjustments before the event date.
            All registered attendees will receive the finalized schedule via email prior to the symposium.
          </p>
        </div>

      </div>
    </section>
  );
};
