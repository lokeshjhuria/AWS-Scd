import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, Calendar, Award, ExternalLink } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';
import { CloudCanvas } from './CloudCanvas';
import { CountdownTimer } from './CountdownTimer';

export const HeroSection = ({ onOpenRegisterModal }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-aws-dark">
      {/* Dynamic Animated Cloud Canvas */}
      <CloudCanvas />

      {/* Ambient gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-aws-orange/15 via-purple-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-aws-blue/10 blur-[90px] pointer-events-none rounded-full" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-mesh opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* College & Community Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-aws-orange animate-ping" />
          <span className="text-xs sm:text-sm font-semibold text-slate-200">
            {eventConfig.collegeShort} • {eventConfig.city}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-xs sm:text-sm font-mono text-aws-orange font-bold">
            {eventConfig.edition}
          </span>
        </motion.div>

        {/* Main Event Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-tight font-sans"
        >
          AWS Student{' '}
          <span className="bg-gradient-to-r from-aws-orange via-aws-amber to-yellow-300 bg-clip-text text-transparent">
            Community Day
          </span>{' '}
          <span className="text-slate-300 block sm:inline text-3xl sm:text-5xl font-bold mt-1 sm:mt-0">
            at I²IT
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-sky-200 to-amber-200"
        >
          {eventConfig.tagline}
        </motion.p>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-sans"
        >
          {eventConfig.shortDescription}
        </motion.p>

        {/* Venue Location chip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-4 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-400 font-medium"
        >
          <MapPin className="w-4 h-4 text-aws-orange" />
          <span>{eventConfig.venue.name}, {eventConfig.venue.locality}, {eventConfig.venue.city}</span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-black bg-gradient-to-r from-aws-orange to-aws-amber hover:from-amber-400 hover:to-orange-500 shadow-glow-orange transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Register Now (Free)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#agenda"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 transition-all duration-200 backdrop-blur-md"
          >
            <span>Explore Agenda</span>
          </a>

          <a
            href="#badge"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-purple-300 bg-purple-950/40 hover:bg-purple-900/40 border border-purple-500/40 hover:border-purple-400 transition-all duration-200 backdrop-blur-md"
          >
            <Award className="w-4 h-4 text-purple-400" />
            <span>Generate Event Badge</span>
          </a>
        </motion.div>

        {/* Live Countdown Timer */}
        <CountdownTimer />

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {eventConfig.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md flex flex-col items-center hover:border-aws-orange/30 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-aws-orange mt-0.5">{stat.suffix}</span>
              <span className="text-[11px] text-slate-400 mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
