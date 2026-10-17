import React, { useState } from 'react';
import { Cloud, Heart, ExternalLink, Shield, FileText, ArrowUp } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, InstagramIcon, GithubIcon } from '../common/SocialIcons';
import { Modal } from '../common/Modal';
import { eventConfig } from '../../config/eventConfig';

export const Footer = () => {
  const [activeModal, setActiveModal] = useState(null); // 'conduct' | 'privacy' | 'terms'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-slate-800 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aws-orange to-aws-amber p-0.5 shadow-glow-orange">
                <div className="w-full h-full bg-[#080B11] rounded-[10px] flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-aws-orange" />
                </div>
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight">
                  AWS SCD <span className="text-aws-orange font-mono">@ I²IT</span>
                </span>
                <span className="text-[11px] block font-mono text-slate-400">
                  {eventConfig.edition}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {eventConfig.shortDescription}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1 font-mono">
              <p>📍 {eventConfig.venue.institution}</p>
              <p>Hinjawadi Phase 1, Pune – 411 057</p>
              <p>✉️ <a href={`mailto:${eventConfig.contact.email}`} className="text-aws-orange hover:underline">{eventConfig.contact.email}</a></p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Event Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-aws-orange transition-colors">
                  About the Symposium
                </a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-aws-orange transition-colors">
                  Technical Tracks & Labs
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-aws-orange transition-colors">
                  Full Day Schedule
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-aws-orange transition-colors">
                  Speakers & Mentors
                </a>
              </li>
              <li>
                <a href="#badge" className="hover:text-aws-orange transition-colors">
                  Badge Studio Generator
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-aws-orange transition-colors">
                  Student Registration
                </a>
              </li>
              <li>
                <a href="#venue" className="hover:text-aws-orange transition-colors">
                  Campus Directions & Transit
                </a>
              </li>
            </ul>
          </div>

          {/* College & Community (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Host College & Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={eventConfig.contact.collegeWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-slate-300"
                >
                  <span>Official I²IT Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-aws-orange" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.isquareit.edu.in/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-200 transition-colors"
                >
                  About Hope Foundation
                </a>
              </li>
              <li>
                <a
                  href="https://www.isquareit.edu.in/academics/departments/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-200 transition-colors"
                >
                  Departments & Research
                </a>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('conduct')}
                  className="hover:text-aws-orange transition-colors text-left"
                >
                  Code of Conduct
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-aws-orange transition-colors text-left"
                >
                  Privacy Notice
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-aws-orange transition-colors text-left"
                >
                  Participation Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Socials & Community Connect (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Connect With Us
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={eventConfig.contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-[#0077B5] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={eventConfig.contact.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-sky-500 transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={eventConfig.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={eventConfig.contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:border-purple-500 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5 text-aws-orange" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Legal & Trademark Disclaimers */}
        <div className="pt-8 border-t border-slate-800/80 space-y-4 text-xs text-slate-400 leading-relaxed font-sans">
          <p>
            <strong className="text-slate-300">Trademark Notice:</strong> {eventConfig.disclaimers.trademark}
          </p>
          <p>
            <strong className="text-slate-300">Community Disclaimer:</strong> {eventConfig.disclaimers.communityNotice}
          </p>
          <p>
            {eventConfig.disclaimers.academicNotice}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px] font-mono border-t border-slate-900">
            <span>
              © {new Date().getFullYear()} International Institute of Information Technology (I²IT), Pune. All rights reserved.
            </span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" /> by I²IT Student Cloud Community
            </span>
          </div>
        </div>

      </div>

      {/* Code of Conduct Modal */}
      <Modal
        isOpen={activeModal === 'conduct'}
        onClose={() => setActiveModal(null)}
        title="Event Code of Conduct"
        subtitle="Creating a respectful, welcoming learning space for everyone"
      >
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            AWS Student Community Day at I²IT Pune is dedicated to providing a harassment-free and inclusive conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, race, ethnicity, or technical experience level.
          </p>
          <h4 className="font-bold text-white text-base">Expected Participant Behavior:</h4>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Exercise consideration, empathy, and respect in your speech and actions.</li>
            <li>Collaborate actively and encourage fellow student peers during workshops.</li>
            <li>Refrain from demeaning, discriminatory, or harassing behavior and speech.</li>
            <li>Respect the academic premises, laboratories, and networking spaces of I²IT Pune.</li>
          </ul>
        </div>
      </Modal>

      {/* Privacy Notice Modal */}
      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy & Data Protection Notice"
        subtitle="How attendee information is handled"
      >
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            Information collected via the event registration form (such as student name, college email, branch, and academic year) is utilized solely for:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Entry badge issuance, verification at the campus security gate, and attendee check-in.</li>
            <li>Delivering important event updates, laboratory prerequisites, and schedule alerts.</li>
            <li>Issuing digital commemorative participation badges.</li>
          </ul>
          <p>
            We do not sell, license, or share your contact credentials with commercial third-party telemarketers.
          </p>
        </div>
      </Modal>

      {/* Participation Terms Modal */}
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Participation Guidelines & Badging Policy"
        subtitle="Commemorative Badges & Campus Regulations"
      >
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            <strong className="text-white">Commemorative Badge:</strong> The digital badges generated on this website are commemorative tokens celebrating participation in a student community conference. They do not constitute an official Amazon Web Services (AWS) corporate professional certification.
          </p>
          <p>
            <strong className="text-white">Campus Discipline:</strong> Attendees must carry a valid college/university student identification card on the day of the symposium to gain entry to the I²IT Hinjawadi campus.
          </p>
        </div>
      </Modal>

    </footer>
  );
};
