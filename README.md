# AWS Student Community Day @ I²IT Pune - Official Event Website

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.x-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Host Institution](https://img.shields.io/badge/Institution-I²IT_Pune-FF9900)](https://www.isquareit.edu.in/)

A modern, high-performance, developer-focused event website built for the **AWS Student Community Day** hosted at **International Institute of Information Technology (I²IT), Hinjawadi, Pune**.

---

## 🌟 Key Features

1. **Aesthetic & Theme**:
   - Dark Obsidian & Navy backgrounds (`#080B11`, `#0D1117`) inspired by AWS Developer Center.
   - Warm AWS Orange (`#FF9900`) & Amber (`#FFB800`) gradients with purple and cyan accents.
   - Glassmorphism cards with `backdrop-filter`, 1px glowing borders, and neon telemetry.
   - Interactive, hardware-accelerated animated cloud network particles (`CloudCanvas`).

2. **Hero & Dynamic Countdown**:
   - Live Days/Hours/Minutes/Seconds countdown timer with time remaining calculation.
   - **"Add to Google / Apple Calendar"** feature: Generates and downloads a `.ics` calendar invitation file.

3. **Curated Technical Highlights**:
   - 6 Interactive feature tracks: AWS Cloud Fundamentals, Generative AI & Amazon Bedrock, Serverless Architecture, Cloud Security & DevSecOps, Hands-on Technical Lab, and Student Project Showcase.

4. **Multi-Track Agenda Timeline**:
   - Interactive track switcher: All, Keynotes, Technical Deep Dives, Hands-on Labs, Community & Careers.
   - Vertical timeline on mobile viewports and structured multi-column schedule on desktop.

5. **Speakers & Mentors Showcase**:
   - Speaker profile cards with role, organization, talk summary, and LinkedIn connections.
   - Accessible session detail modal with prerequisites and key learning outcomes.

6. **Interactive Commemorative Badge Studio**:
   - Real-time custom attendee badge preview with customized name, role tag, and unique Badge Pass ID.
   - **Download Badge (High-Res PNG)**: Uses HTML5 Canvas off-screen rendering to generate a crisp 800x1100 downloadable attendee badge.
   - Instant Confetti celebration on download + One-click social share snippet for LinkedIn & X.
   - Transparently labeled as a commemorative student participation badge.

7. **Verified Venue & Transit Hub**:
   - Official verified address for **International Institute of Information Technology (I²IT)**, P-14 Rajiv Gandhi Infotech Park, MIDC Phase 1, Hinjawadi, Pune.
   - Embedded interactive Google Map and transit guidance (Metro Line 3, PMPML buses, highway access).

8. **Registration Hub**:
   - Configurable Google Forms URL integration.
   - Express Registration Helper Modal with input validation.

9. **Sponsors & Community Partners**:
   - Multi-tier sponsor slots (Title, Tech, Community) with prospectus request modal.

10. **Expandable FAQ Accordion**:
    - Live keyword search filter to quickly find answers on certificates, laptop requirements, fees, and logistics.

11. **Single Source of Truth Configuration**:
    - Easily modify event dates, registration links, speakers, agenda, organizers, and FAQs in `src/config/eventConfig.js` without touching UI code.

---

## 📁 Project Directory Structure

```
C:\Users\lokes\Downloads\Aws/
├── index.html                  # SEO, OpenGraph, JSON-LD Schema.org, Fonts & Favicon
├── package.json                # Dependencies & build scripts
├── vite.config.js              # Vite bundler configuration
├── tailwind.config.js          # AWS color palette, glass shadows, and animations
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Complete documentation
└── src/
    ├── main.jsx                # React root entry point
    ├── App.jsx                 # Main layout & section assembler
    ├── index.css               # Tailwind directives & glass utilities
    ├── config/
    │   └── eventConfig.js      # Central master configuration file
    └── components/
        ├── common/
        │   ├── SectionHeading.jsx
        │   ├── GlassCard.jsx
        │   └── Modal.jsx
        ├── layout/
        │   ├── Navbar.jsx
        │   └── Footer.jsx
        ├── hero/
        │   ├── HeroSection.jsx
        │   ├── CloudCanvas.jsx
        │   └── CountdownTimer.jsx
        ├── about/
        │   └── AboutSection.jsx
        ├── highlights/
        │   └── HighlightsSection.jsx
        ├── agenda/
        │   └── AgendaSection.jsx
        ├── speakers/
        │   ├── SpeakersSection.jsx
        │   └── SpeakerModal.jsx
        ├── organizers/
        │   └── OrganizersSection.jsx
        ├── sponsors/
        │   └── SponsorsSection.jsx
        ├── registration/
        │   └── RegistrationSection.jsx
        ├── badge/
        │   └── BadgeGeneratorSection.jsx
        ├── venue/
        │   └── VenueSection.jsx
        └── faq/
            └── FAQSection.jsx
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Install Dependencies
In the project directory, run:
```bash
npm install
```

### 3. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to explore the website with instant hot module reloading.

### 4. Build for Production
```bash
npm run build
```
This generates an optimized, minified production build in the `dist/` directory ready for deployment.

---

## ⚙️ How to Customize Event Information

All event data is centralized in [`src/config/eventConfig.js`](src/config/eventConfig.js). You do **not** need to touch React components to edit event details:

- **Target Date**: Edit `targetDateISO` (e.g. `"2026-11-14T09:00:00+05:30"`) to automatically update the countdown timer.
- **Registration Form**: Change `registration.googleFormsUrl` to your official Google Form URL.
- **Venue & Map**: Modify `venue.address`, `venue.googleMapsEmbedUrl`, or transit guides.
- **Agenda & Speakers**: Update the `agenda` and `speakers` arrays to reflect new sessions or confirmed guest speakers.
- **Organizers & Sponsors**: Update names, roles, and partnership tiers.

---

## 🌐 Deployment to Vercel

Deploying this website to **Vercel** takes under 2 minutes:

1. Push this folder to a GitHub / GitLab repository.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live on a global CDN with SSL enabled.

Alternatively, with the Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

## 📜 Disclaimers & Attribution
- **AWS Trademark Notice**: Amazon Web Services, AWS, and the Powered by AWS logo are trademarks of Amazon.com, Inc. or its affiliates.
- **Community Independence**: This is an independent student community event organized at the International Institute of Information Technology (I²IT), Hinjawadi, Pune.
- **College Website**: [isquareit.edu.in](https://www.isquareit.edu.in/)
