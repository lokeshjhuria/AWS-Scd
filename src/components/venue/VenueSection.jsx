import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Bus, Train, Car, Mail, Phone, ExternalLink, Globe } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { eventConfig } from '../../config/eventConfig';

export const VenueSection = () => {
  const { venue, contact } = eventConfig;

  return (
    <section id="venue" className="relative py-20 bg-[#070A0F] overflow-hidden border-t border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-aws-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Campus Location & Travel"
          badgeIcon={MapPin}
          title="How to Reach the Venue at"
          highlight="I²IT Hinjawadi, Pune"
          description="Centrally located within Pune's premier Rajiv Gandhi Infotech Park Phase 1, the I²IT campus is easily accessible via road, metro corridors, and city bus transit."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Address Card & Transit Modes */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-700/80">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-aws-orange/10 border border-aws-orange/30 flex items-center justify-center text-aws-orange">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">{venue.institution}</h3>
                  <span className="text-xs text-aws-orange font-mono font-semibold">{venue.name}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {venue.address}, {venue.locality}, {venue.city} – {venue.postalCode}, {venue.state}, India.
              </p>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 mb-6 font-mono">
                Landmark: <span className="text-slate-200">{venue.landmark}</span>
              </div>

              <a
                href={venue.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-aws-orange to-aws-amber hover:from-amber-400 hover:to-orange-500 shadow-md transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions on Google Maps</span>
              </a>
            </div>

            {/* Transit Options */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Transit & Commute Guide:
              </h4>

              {venue.transit.map((t, idx) => (
                <div
                  key={t.mode}
                  className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-xl bg-slate-800 text-aws-orange mt-0.5">
                    {t.mode.includes('Metro') ? (
                      <Train className="w-4 h-4" />
                    ) : t.mode.includes('Bus') ? (
                      <Bus className="w-4 h-4" />
                    ) : (
                      <Car className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white font-sans">{t.mode}</h5>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Inquiries */}
            <div className="p-5 rounded-2xl bg-[#090D14] border border-slate-800 space-y-2 text-xs">
              <span className="font-mono font-bold text-aws-orange uppercase tracking-wider block mb-1">
                Event Support & College Helpdesk:
              </span>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-aws-orange" />
                <a href={`mailto:${contact.email}`} className="hover:text-white underline">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-aws-orange" />
                <a
                  href={contact.collegeWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  isquareit.edu.in (Official Campus Site)
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 h-full min-h-[460px] rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl relative">
            <iframe
              title="I2IT Pune Campus Location Map"
              src={venue.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '460px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-125 saturate-75 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
