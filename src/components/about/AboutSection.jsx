import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Cpu, Sparkles, Users, Building2, CheckCircle2, Compass, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GlassCard } from '../common/GlassCard';
import { eventConfig } from '../../config/eventConfig';

const iconMap = {
  Cloud,
  Cpu,
  Sparkles,
  Users,
};

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-[#070A0F] overflow-hidden border-t border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-aws-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About The Event"
          badgeIcon={Compass}
          title="Empowering the Next Generation of"
          highlight="Cloud Builders"
          description="AWS Student Community Day at I²IT Pune is a community-driven technological gathering crafted to bridge the gap between academic computer science curriculum and modern industry-grade cloud infrastructure."
        />

        {/* College & Context Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          {/* Left Column: I²IT College Context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300">
              <Building2 className="w-4 h-4 text-aws-orange" />
              <span>Host Institution: I²IT Pune</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans leading-snug">
              At the Heart of Hinjawadi’s Tech Epicenter
            </h3>

            <p className="text-slate-300 leading-relaxed text-base">
              Founded by Hope Foundation and situated within the bustling Rajiv Gandhi Infotech Park Phase 1,
              <strong className="text-white"> International Institute of Information Technology (I²IT)</strong> has
              consistently championed hands-on engineering, innovation, and industry alignment.
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              The <strong className="text-aws-orange">AWS Student Community Day</strong> brings that spirit to life.
              Organized by passionate student technologists and supported by faculty advisors, this single-day conference
              gives undergraduate and postgraduate engineers direct access to AWS technologies, architecture best practices,
              and career paths.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
                <span>100% Student-Driven & Community Focused</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
                <span>Hands-on Lab Coding Exercises</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
                <span>Industry Architect Mentorship</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
                <span>No Commercial Paywalls or Hidden Fees</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={eventConfig.contact.collegeWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-aws-orange hover:text-aws-amber transition-colors"
              >
                <span>Visit Official I²IT Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Takeaway Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {eventConfig.aboutPillars.map((pillar, idx) => {
              const IconComp = iconMap[pillar.icon] || Cloud;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-[#0D131F]/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:bg-[#101826]"
                >
                  <div className="w-10 h-10 rounded-xl bg-aws-orange/10 border border-aws-orange/20 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5 text-aws-orange" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-sans">{pillar.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
