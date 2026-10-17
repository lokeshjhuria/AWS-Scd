import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Download } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(eventConfig.targetDateISO).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0 && difference > -86400000) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true, isExpired: false });
        return;
      }

      if (difference <= -86400000) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: false, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isLive: false, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const downloadICS = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//I2IT//AWS Student Community Day//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `SUMMARY:${eventConfig.eventName} @ ${eventConfig.collegeShort}`,
      `DESCRIPTION:${eventConfig.shortDescription}\\n\\nWebsite: https://isquareit.edu.in/`,
      `LOCATION:${eventConfig.venue.name}\\, ${eventConfig.venue.institution}\\, ${eventConfig.venue.address}`,
      'DTSTART:20261114T033000Z',
      'DTEND:20261114T120000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'AWS-Community-Day-I2IT.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timerUnits = [
    { label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      {/* Date badge */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-sm">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">
          <Calendar className="w-3.5 h-3.5 text-aws-orange" />
          {eventConfig.dateDisplay}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-mono">
          <Clock className="w-3.5 h-3.5 text-aws-amber" />
          {eventConfig.timeDisplay}
        </span>
      </div>

      {timeLeft.isLive ? (
        <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center backdrop-blur-md">
          <span className="inline-block w-3 h-3 rounded-full bg-emerald-400 animate-ping mr-2" />
          <h4 className="text-xl font-bold text-emerald-300 inline">Event Is Live Today!</h4>
          <p className="text-sm text-slate-300 mt-2">Welcome to I²IT Pune. Proceed to the registration desk in the main auditorium.</p>
        </div>
      ) : timeLeft.isExpired ? (
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700 text-center backdrop-blur-md">
          <h4 className="text-lg font-bold text-slate-300">AWS Student Community Day 2026 Concluded</h4>
          <p className="text-sm text-slate-400 mt-1">Thank you for attending. Generate your commemorative badge below!</p>
        </div>
      ) : (
        <div className="relative">
          {/* Subtle glow backdrop */}
          <div className="absolute inset-0 bg-gradient-to-r from-aws-orange/10 via-purple-500/10 to-aws-amber/10 blur-xl -z-10 rounded-2xl" />

          {/* Counter blocks */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-[#0F1626]/80 border border-slate-700/60 shadow-glass backdrop-blur-xl">
            {timerUnits.map((unit, index) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="w-full py-3 sm:py-4 px-2 rounded-xl bg-[#0B0F19]/90 border border-slate-700/50 shadow-inner flex items-center justify-center">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                    {unit.value}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono font-medium text-aws-orange uppercase tracking-wider mt-2">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Action: Add to Calendar */}
          <div className="mt-4 flex items-center justify-center">
            <button
              onClick={downloadICS}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 transition-all hover:border-aws-orange/40"
              title="Download iCalendar event (.ics)"
            >
              <Download className="w-3.5 h-3.5 text-aws-orange" />
              <span>Add to Google / Apple Calendar (.ics)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
