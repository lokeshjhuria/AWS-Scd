import React from 'react';
import { Modal } from '../common/Modal';
import { ExternalLink, Sparkles, BookOpen, CheckCircle } from 'lucide-react';
import { LinkedinIcon } from '../common/SocialIcons';

export const SpeakerModal = ({ speaker, isOpen, onClose }) => {
  if (!speaker) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={speaker.name}
      subtitle={`${speaker.role} • ${speaker.organization}`}
    >
      <div className="space-y-6">
        {/* Status tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-aws-orange border border-slate-700">
          <Sparkles className="w-3.5 h-3.5 text-aws-orange" />
          <span>{speaker.status}</span>
        </div>

        {/* Talk topic overview */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-aws-orange block mb-1">
            Featured Session Topic:
          </span>
          <h4 className="text-lg font-bold text-white mb-2">{speaker.topic}</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Attendees will explore real-world implementation nuances, design patterns, and industry lessons directly relevant to cloud engineering.
          </p>
        </div>

        {/* Speaker Biography */}
        <div>
          <h5 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
            About the Speaker:
          </h5>
          <p className="text-sm text-slate-300 leading-relaxed">{speaker.bio}</p>
        </div>

        {/* Focus areas */}
        <div>
          <h5 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
            Session Focus Topics:
          </h5>
          <div className="flex flex-wrap gap-2">
            {speaker.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Professional Links */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0077B5]/20 hover:bg-[#0077B5]/40 border border-[#0077B5]/40 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
            <span>LinkedIn Profile</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};
