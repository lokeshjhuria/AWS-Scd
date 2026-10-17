import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, Mail, MessageSquare } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { eventConfig } from '../../config/eventConfig';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = eventConfig.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 bg-aws-dark overflow-hidden border-t border-slate-800/60">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Got Questions?"
          badgeIcon={HelpCircle}
          title="Frequently Asked"
          highlight="Questions"
          description="Everything you need to know about attending the AWS Student Community Day at I²IT Pune."
        />

        {/* Search input for questions */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. laptop, free, certificates, venue)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-aws-orange transition-colors"
          />
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-slate-400">
              <p>No questions matched your search query "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs text-aws-orange hover:underline font-mono"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0E1524] border-slate-700 shadow-md'
                      : 'bg-[#090D14]/80 border-slate-800/80 hover:border-slate-700/60'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-aws-orange/40"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-white font-sans">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-aws-orange/20 text-aws-orange'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed font-sans border-t border-slate-800/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#101826] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-aws-orange/10 border border-aws-orange/30 flex items-center justify-center text-aws-orange shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific question not listed here?</h4>
              <p className="text-xs text-slate-400">Reach out directly to the student organizing team.</p>
            </div>
          </div>

          <a
            href={`mailto:${eventConfig.contact.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-aws-orange/40 transition-colors whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5 text-aws-orange" />
            <span>Email Organizers</span>
          </a>
        </div>

      </div>
    </section>
  );
};
