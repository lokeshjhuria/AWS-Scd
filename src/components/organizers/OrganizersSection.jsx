import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Code2, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { eventConfig } from '../../config/eventConfig';

export const OrganizersSection = () => {
  const { facultyAdvisors, studentTeam, participatingClubs } = eventConfig.organizers;

  return (
    <section id="community" className="relative py-20 bg-[#070A0F] overflow-hidden border-t border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Community & Faculty"
          badgeIcon={HeartHandshake}
          title="Organized by Students,"
          highlight="Guided by Faculty"
          description="A collaborative effort bringing together student developers, faculty advisors, and departmental tech clubs across I²IT Pune."
        />

        {/* 1. Faculty Advisors */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6 text-sm font-mono font-semibold uppercase tracking-wider text-aws-orange">
            <GraduationCap className="w-4 h-4 text-aws-orange" />
            <span>Faculty Mentors & Department Advisors</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyAdvisors.map((faculty, idx) => (
              <div
                key={faculty.name}
                className="p-6 rounded-2xl glass-card border border-slate-800 flex items-start gap-4 hover:border-slate-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-aws-orange/10 border border-aws-orange/30 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-aws-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-sans">{faculty.name}</h4>
                  <p className="text-xs font-semibold text-aws-amber mt-0.5">{faculty.designation}</p>
                  <p className="text-xs text-slate-400 mt-1">{faculty.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Student Core Committee */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6 text-sm font-mono font-semibold uppercase tracking-wider text-purple-400">
            <Code2 className="w-4 h-4 text-purple-400" />
            <span>Student Organizing Committee</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentTeam.map((member, idx) => (
              <div
                key={member.role}
                className="p-5 rounded-2xl bg-[#0C121D] border border-slate-800/90 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-sm font-mono font-bold text-purple-400 mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-white font-sans">{member.name}</h4>
                  <p className="text-xs font-semibold text-aws-orange mt-1">{member.role}</p>
                </div>
                <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800/80 font-mono">
                  {member.department}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Participating Campus Clubs */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-sm font-mono font-semibold uppercase tracking-wider text-slate-400">
            <Users className="w-4 h-4 text-slate-400" />
            <span>Collaborating Student Tech Clubs at I²IT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {participatingClubs.map((club) => (
              <div
                key={club.name}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-aws-orange mt-1.5 shrink-0" />
                <div>
                  <h5 className="text-sm font-bold text-white font-sans">{club.name}</h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{club.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
