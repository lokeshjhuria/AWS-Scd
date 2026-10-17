import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Mail, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Modal } from '../common/Modal';
import { eventConfig } from '../../config/eventConfig';

export const SponsorsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tiers, disclaimer, prospectusEmail } = eventConfig.sponsors;

  return (
    <section id="sponsors" className="relative py-20 bg-aws-dark overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Partnership Showcase"
          badgeIcon={Building}
          title="Community & Industry"
          highlight="Partners"
          description="We are inviting organizations, cloud startups, and developer tool platforms to empower student engineers and mentor future cloud practitioners."
        />

        {/* Sponsor Tier Categories */}
        <div className="space-y-12 mb-14">
          {tiers.map((tier) => (
            <div key={tier.tierName} className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-slate-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-aws-orange" />
                <span>{tier.tierName}</span>
                <span className="text-slate-500">•</span>
                <span className="text-aws-amber">{tier.badge}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {tier.slots.map((slot, index) => (
                  <div
                    key={slot.name + index}
                    className="p-8 rounded-2xl bg-[#0C121D]/80 border border-dashed border-slate-700/80 hover:border-aws-orange/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-800/60 flex items-center justify-center text-slate-400 group-hover:text-aws-orange transition-colors mb-3">
                      <Building className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                      {slot.placeholderText}
                    </span>
                    <span className="text-[11px] font-mono text-aws-orange mt-1">
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Sponsor Card */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl glass-card border border-aws-orange/30 text-center relative overflow-hidden shadow-glow-orange">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-aws-orange/10 blur-3xl rounded-full" />
          
          <h3 className="text-2xl font-bold text-white mb-2 font-sans">
            Interested in Sponsoring or Partnering with Us?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto mb-6">
            Gain direct campus brand visibility, connect with 350+ engineering students, mentor hackathon solutions, and recruit promising cloud talent.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-aws-orange to-aws-amber hover:from-amber-400 hover:to-orange-500 shadow-md transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>View Sponsorship Prospectus</span>
            </button>

            <a
              href={`mailto:${prospectusEmail}?subject=Sponsorship%20Inquiry%20-%20AWS%20Community%20Day%20I2IT`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4 text-aws-orange" />
              <span>Contact Organizer Team</span>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <p>{disclaimer}</p>
        </div>

        {/* Sponsorship Prospectus Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Sponsorship & Community Partnership"
          subtitle="Support Student Cloud Innovation at I²IT Pune"
        >
          <div className="space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              We welcome technology organizations, developer tool builders, and cloud platforms to collaborate with us for the 2026 symposium.
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-aws-orange tracking-wider">
                Partnership Opportunities:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
                  <span>Branded keynote or breakout technical showcase</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
                  <span>On-campus demo booth & developer engagement lounge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
                  <span>Direct distribution of developer credits, swags, and student licenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
                  <span>Logo placement on event badges, banners, and digital portal</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="font-bold text-white block mb-1">To receive our comprehensive deck:</span>
              Please write to us at{' '}
              <a
                href={`mailto:${prospectusEmail}`}
                className="text-aws-orange font-mono underline"
              >
                {prospectusEmail}
              </a>{' '}
              with your organization profile.
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>

      </div>
    </section>
  );
};
