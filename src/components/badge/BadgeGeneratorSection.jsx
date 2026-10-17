import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Download, Sparkles, RefreshCw, Share2, Check, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../common/SectionHeading';
import { eventConfig } from '../../config/eventConfig';

export const BadgeGeneratorSection = () => {
  const [name, setName] = useState('Alex Rivera');
  const [role, setRole] = useState('Student Cloud Innovator');
  const [theme, setTheme] = useState('orange'); // 'orange' | 'cyan' | 'purple'
  const [copied, setCopied] = useState(false);
  const [badgeId, setBadgeId] = useState('I2IT-AWS-7482');

  const previewRef = useRef(null);

  // Regenerate random ID
  const regenerateId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setBadgeId(`I2IT-AWS-${randomNum}`);
  };

  const roles = [
    'Student Cloud Innovator',
    'Undergraduate Developer',
    'AI / ML Enthusiast',
    'DevOps & Cloud Explorer',
    'Community Volunteer',
  ];

  const themes = [
    { id: 'orange', name: 'AWS Amber', primary: '#FF9900', secondary: '#FFB800', border: 'border-aws-orange/50' },
    { id: 'cyan', name: 'Cloud Cyan', primary: '#06B6D4', secondary: '#38BDF8', border: 'border-cyan-400/50' },
    { id: 'purple', name: 'Nebula Purple', primary: '#8B5CF6', secondary: '#A855F7', border: 'border-purple-500/50' },
  ];

  const activeThemeObj = themes.find((t) => t.id === theme) || themes[0];

  // Render high-res badge to canvas and download PNG
  const downloadBadge = () => {
    const canvas = document.createElement('canvas');
    const width = 800;
    const height = 1100;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background Dark Navy
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#0B0F19');
    bgGrad.addColorStop(1, '#05070B');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Glowing orb
    const radial = ctx.createRadialGradient(width / 2, 350, 10, width / 2, 350, 450);
    radial.addColorStop(0, `${activeThemeObj.primary}33`);
    radial.addColorStop(1, 'transparent');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, width, height);

    // Outer Border
    ctx.strokeStyle = activeThemeObj.primary;
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    // Inner subtle border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.strokeRect(45, 45, width - 90, height - 90);

    // Lanyard slot at top
    ctx.fillStyle = '#080B11';
    ctx.beginPath();
    ctx.roundRect(width / 2 - 60, 60, 120, 20, 10);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Event Title
    ctx.fillStyle = activeThemeObj.primary;
    ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('AWS STUDENT COMMUNITY DAY 2026', width / 2, 135);

    // College
    ctx.fillStyle = '#94A3B8';
    ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('International Institute of Information Technology (I²IT), Pune', width / 2, 168);

    // Divider Line
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.lineTo(width - 100, 200);
    ctx.stroke();

    // Avatar Placeholder Circle
    ctx.beginPath();
    ctx.arc(width / 2, 330, 95, 0, Math.PI * 2);
    ctx.fillStyle = '#101726';
    ctx.fill();
    ctx.strokeStyle = activeThemeObj.primary;
    ctx.lineWidth = 4;
    ctx.stroke();

    // Avatar Initials
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'AWS';

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 72px "JetBrains Mono", monospace';
    ctx.fillText(initials, width / 2, 355);

    // Attendee Name
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 44px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(name.trim() || 'Attendee', width / 2, 490);

    // Role Tag Pill
    const roleWidth = ctx.measureText(role).width + 50;
    ctx.fillStyle = '#161F30';
    ctx.beginPath();
    ctx.roundRect(width / 2 - roleWidth / 2, 520, roleWidth, 42, 21);
    ctx.fill();
    ctx.strokeStyle = activeThemeObj.primary;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = activeThemeObj.primary;
    ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(role, width / 2, 548);

    // ID Badge
    ctx.fillStyle = '#64748B';
    ctx.font = '600 18px "JetBrains Mono", monospace';
    ctx.fillText(`ATTENDEE PASS ID: ${badgeId}`, width / 2, 620);

    // Center Info Card
    ctx.fillStyle = '#0D1424';
    ctx.beginPath();
    ctx.roundRect(100, 660, width - 200, 230, 20);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Card details
    ctx.textAlign = 'left';
    ctx.fillStyle = '#E2E8F0';
    ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Event Date:', 140, 720);
    ctx.fillStyle = activeThemeObj.primary;
    ctx.fillText(eventConfig.dateDisplay, 140, 755);

    ctx.fillStyle = '#E2E8F0';
    ctx.fillText('Venue:', 140, 810);
    ctx.fillStyle = '#94A3B8';
    ctx.font = '18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('I²IT Campus, Hinjawadi Phase 1, Pune', 140, 845);

    // Stylized QR code box on right
    ctx.strokeStyle = activeThemeObj.primary;
    ctx.lineWidth = 2;
    ctx.strokeRect(550, 700, 110, 110);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('[VERIFIED PASS]', 605, 760);

    // Footer Disclaimer
    ctx.textAlign = 'center';
    ctx.fillStyle = '#64748B';
    ctx.font = 'italic 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Commemorative Community Event Badge • I²IT Hinjawadi Pune', width / 2, 940);
    ctx.fillText('Not an official Amazon Web Services (AWS) corporate credential.', width / 2, 970);

    // Trigger download
    const link = document.createElement('a');
    link.download = `${name.replace(/\s+/g, '_')}_I2IT_AWS_Badge.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Confetti celebration!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF9900', '#FFB800', '#8B5CF6', '#38BDF8'],
    });
  };

  const copyShareText = () => {
    const text = `Excited to participate in AWS Student Community Day 2026 at I²IT Pune! 🚀 Generated my commemorative attendee badge. Check out the event at https://isquareit.edu.in/ #AWSCommunity #I2ITPune #CloudComputing`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="badge" className="relative py-20 bg-aws-dark overflow-hidden border-t border-slate-800/60">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-aws-orange/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Commemorative Badge Studio"
          badgeIcon={Award}
          title="Personalize & Download Your"
          highlight="Event Badge"
          description="Customize your digital attendee badge, preview it in real-time with holographic styling, and download a high-resolution PNG to share across LinkedIn and X."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-6 space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800 backdrop-blur-md">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                Your Full Name:
              </label>
              <input
                type="text"
                maxLength={32}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:outline-none focus:border-aws-orange transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                Select Your Role / Track:
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-sans text-sm focus:outline-none focus:border-aws-orange transition-colors"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                Holographic Accent Theme:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
                      theme === t.id
                        ? 'bg-slate-800 text-white border-white/60 shadow-sm'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: t.primary }}
                    />
                    <span>{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-mono text-slate-400">
                Badge Pass ID: <strong className="text-white">{badgeId}</strong>
              </span>
              <button
                onClick={regenerateId}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-aws-orange hover:text-amber-300 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Shuffle ID</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                onClick={downloadBadge}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-aws-orange to-aws-amber hover:from-amber-400 hover:to-orange-500 shadow-glow-orange transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Badge (High-Res PNG)</span>
              </button>

              <button
                onClick={copyShareText}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Announcement Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-purple-400" />
                    <span>Copy Social Share Post for LinkedIn / X</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-[11px] text-slate-400 leading-relaxed italic border-t border-slate-800/80 pt-3">
              * Note: This is an unofficial commemorative badge created for student event attendees at I²IT Pune. It does not represent an AWS professional certification.
            </div>
          </div>

          {/* Interactive Badge Preview (Right) */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              ref={previewRef}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className={`relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#111827] via-[#090D15] to-[#04060A] p-6 shadow-2xl border-2 transition-all duration-300 ${activeThemeObj.border}`}
            >
              {/* Lanyard punch hole slot */}
              <div className="w-16 h-2 rounded-full bg-slate-900 border border-slate-700 mx-auto mb-5 shadow-inner" />

              {/* Holographic light streak */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none rounded-tr-3xl" />

              {/* Event Header */}
              <div className="text-center pb-4 border-b border-slate-800/80">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-400 block">
                  {eventConfig.collegeShort} • PUNE
                </span>
                <h4
                  className="text-base font-extrabold tracking-tight mt-0.5"
                  style={{ color: activeThemeObj.primary }}
                >
                  AWS STUDENT COMMUNITY DAY
                </h4>
                <span className="text-[11px] text-slate-400 font-medium">
                  {eventConfig.edition}
                </span>
              </div>

              {/* Avatar circle with initials */}
              <div className="my-6 flex flex-col items-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center font-mono font-extrabold text-2xl text-white shadow-xl mb-3"
                  style={{
                    backgroundColor: '#101624',
                    border: `2px solid ${activeThemeObj.primary}`,
                    boxShadow: `0 0 20px -5px ${activeThemeObj.primary}40`,
                  }}
                >
                  {name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2) || 'AWS'}
                </div>

                <h3 className="text-xl font-extrabold text-white font-sans text-center">
                  {name.trim() || 'Your Name Here'}
                </h3>

                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1.5"
                  style={{
                    backgroundColor: `${activeThemeObj.primary}18`,
                    color: activeThemeObj.primary,
                    border: `1px solid ${activeThemeObj.primary}40`,
                  }}
                >
                  {role}
                </span>

                <span className="text-[11px] font-mono text-slate-400 mt-2">
                  ID: <span className="text-slate-300 font-bold">{badgeId}</span>
                </span>
              </div>

              {/* Mini Venue & QR Details */}
              <div className="p-3.5 rounded-2xl bg-[#070A0F] border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Venue & Date
                  </span>
                  <span className="font-semibold text-slate-200 block text-[11px]">
                    {eventConfig.dateDisplay}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    I²IT Hinjawadi Phase 1
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center">
                  <QrCode className="w-8 h-8 text-slate-300" />
                </div>
              </div>

              {/* Bottom watermark */}
              <div className="mt-4 text-center">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                  COMMEMORATIVE PARTICIPATION PASS
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
