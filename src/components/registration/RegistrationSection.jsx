import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, ExternalLink, CheckCircle2, AlertCircle, Laptop, Calendar, MapPin, Send } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Modal } from '../common/Modal';
import { eventConfig } from '../../config/eventConfig';

export const RegistrationSection = () => {
  const [isQuickFormOpen, setIsQuickFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: 'International Institute of Information Technology (I²IT)',
    degree: 'B.E. Computer Engineering',
    year: '3rd Year',
    hasLaptop: 'Yes',
    experienceLevel: 'Beginner',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate frontend validation & smooth handover to official Google Form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Auto open official Google Form with parameters or redirect
      setTimeout(() => {
        window.open(eventConfig.registration.googleFormsUrl, '_blank', 'noopener,noreferrer');
      }, 1500);
    }, 800);
  };

  return (
    <section id="register" className="relative py-20 bg-[#070A0F] overflow-hidden border-t border-slate-800/60">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-aws-orange/15 to-purple-600/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Secure Your Seat"
          badgeIcon={Ticket}
          title="Join Us at"
          highlight="I²IT Hinjawadi"
          description="Registration is completely free for college students. Due to laboratory workstation and auditorium capacity constraints, seats are allocated on a verified first-come, first-served basis."
        />

        {/* Main Registration Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left: Pass Features & Perks */}
          <div className="lg:col-span-7 rounded-3xl glass-card p-6 sm:p-8 flex flex-col justify-between border-slate-700/80">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {eventConfig.registration.badgeText}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Capacity: {eventConfig.registration.capacityLimit}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-sans">
                Student All-Access Pass
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Gain full in-person entry to all technical tracks, live coding workshops, and community networking sessions.
              </p>

              {/* Pass Inclusions */}
              <div className="space-y-3 pt-2 mb-6">
                {[
                  'Access to Keynotes & Architecture Masterclasses',
                  'Participation in Hands-on Serverless Workshop (Lab seat)',
                  'Official Commemorative Event Participation Badge',
                  'Networking Lunch & Refreshments included',
                  'AWS Swag Pack, Stickers & Learning Resource Guide',
                  'Direct interaction with Cloud Architects & Community Mentors',
                ].map((perk) => (
                  <div key={perk} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note & Prerequisites */}
            <div className="p-4 rounded-xl bg-[#090D14] border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <Laptop className="w-4 h-4 text-aws-orange shrink-0 mt-0.5" />
              <span>
                <strong>Prerequisite:</strong> {eventConfig.registration.prerequisites}
              </span>
            </div>
          </div>

          {/* Right: Registration Actions & Form Trigger */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#101826] to-[#0A0E17] border border-slate-700/80 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="text-center pb-6 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Ticket Fee
                </span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                    ₹0
                  </span>
                  <span className="text-sm font-semibold text-aws-orange">
                    (100% Free)
                  </span>
                </div>
                <span className="text-xs text-emerald-400 font-medium block mt-1">
                  Community-Funded Event
                </span>
              </div>

              <div className="py-6 space-y-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-aws-orange" />
                  <span>{eventConfig.dateDisplay}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-aws-orange" />
                  <span>{eventConfig.venue.name}, {eventConfig.venue.locality}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>College student ID card required at entry gate</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              {/* Primary: Direct Google Forms URL */}
              <a
                href={eventConfig.registration.googleFormsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-aws-orange to-aws-amber hover:from-amber-400 hover:to-orange-500 shadow-glow-orange transition-all duration-300"
              >
                <span>Complete Registration on Google Forms</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Secondary: Quick Fill Assist */}
              <button
                onClick={() => setIsQuickFormOpen(true)}
                className="w-full py-3 px-6 rounded-xl font-semibold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                Quick Express Registration Helper
              </button>
            </div>
          </div>

        </div>

        {/* Quick Express Registration Modal */}
        <Modal
          isOpen={isQuickFormOpen}
          onClose={() => {
            setIsQuickFormOpen(false);
            setSubmitted(false);
          }}
          title="Express Registration Assistant"
          subtitle="Pre-fill your details for the AWS Student Community Day"
        >
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Details Verified!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Opening the official I²IT AWS Community Day Google Registration Form in a new tab...
              </p>
              <div className="pt-2">
                <a
                  href={eventConfig.registration.googleFormsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-aws-orange"
                >
                  <span>Open Form Directly</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleQuickFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                  Full Name (For Badge & Certificate) *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Aditi Sharma"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-aws-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                  Student / College Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. aditi.s@isquareit.edu.in"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-aws-orange"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                    College / Institution *
                  </label>
                  <input
                    type="text"
                    name="college"
                    required
                    value={formData.college}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-aws-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                    Year of Study *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-aws-orange"
                  >
                    <option>1st Year (FE)</option>
                    <option>2nd Year (SE)</option>
                    <option>3rd Year (TE)</option>
                    <option>4th Year (BE)</option>
                    <option>Postgraduate / M.E.</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                    Will you bring a laptop for the lab? *
                  </label>
                  <select
                    name="hasLaptop"
                    value={formData.hasLaptop}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-aws-orange"
                  >
                    <option>Yes, I will bring my laptop</option>
                    <option>No, I will share or observe</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1">
                    AWS Experience Level *
                  </label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-aws-orange"
                  >
                    <option>Complete Beginner</option>
                    <option>Have created AWS Free Tier</option>
                    <option>Intermediate (Built projects)</option>
                    <option>Advanced (AWS Certified)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsQuickFormOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-aws-orange to-aws-amber hover:from-amber-400 hover:to-orange-500 shadow-md transition-all"
                >
                  {isSubmitting ? (
                    <span>Validating...</span>
                  ) : (
                    <>
                      <span>Proceed to Google Form</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </Modal>

      </div>
    </section>
  );
};
