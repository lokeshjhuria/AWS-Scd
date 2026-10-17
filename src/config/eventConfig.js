/**
 * =========================================================================
 * I²IT AWS STUDENT COMMUNITY DAY - CENTRAL EVENT CONFIGURATION
 * =========================================================================
 * This file is the single source of truth for all event data, links,
 * schedule, speakers, organizers, venue information, and FAQs.
 * Update any value here and it immediately reflects across the entire website.
 */

export const eventConfig = {
  // --- Event Branding & Metadata ---
  eventName: "AWS Student Community Day",
  edition: "2026 Edition",
  collegeName: "International Institute of Information Technology (I²IT)",
  collegeShort: "I²IT Pune",
  city: "Hinjawadi, Pune",
  tagline: "Learn. Build. Innovate. Connect.",
  shortDescription:
    "A premier student-led cloud computing symposium bringing together students, developers, and industry architects to explore Amazon Web Services, Generative AI, serverless infrastructure, and modern cloud engineering.",

  // --- Dates & Countdown Target ---
  // Format: YYYY-MM-DDTHH:mm:ss+05:30 (Editable placeholder until final date freeze)
  targetDateISO: "2026-11-14T09:00:00+05:30",
  dateDisplay: "Saturday, November 14, 2026",
  dateStatus: "Tentative / Schedule Subject to College Notification",
  timeDisplay: "08:30 AM – 05:30 PM IST",
  duration: "Full Day (9 Hours of Cloud Learning)",

  // --- Registration Details ---
  registration: {
    status: "Open", // "Open" | "Coming Soon" | "Sold Out"
    badgeText: "Free Student Registration",
    // Configurable Google Forms URL (or custom registration handler):
    googleFormsUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc-I2IT-AWS-Community-Day-2026/viewform",
    directModalEnabled: true,
    capacityLimit: "350 Seats (First-Come, First-Served)",
    prerequisites: "Open to all undergraduate & postgraduate engineering students. Bring your laptop for hands-on labs.",
  },

  // --- Key Statistics ---
  stats: [
    { label: "Expected Attendees", value: "350+", suffix: "Students" },
    { label: "Tech Sessions", value: "8+", suffix: "Deep Dives" },
    { label: "Hands-on Labs", value: "3", suffix: "Live Workshops" },
    { label: "Community Access", value: "100%", suffix: "Free Entry" },
  ],

  // --- Venue & Location ---
  venue: {
    name: "Auditorium & Advanced Computing Labs",
    institution: "International Institute of Information Technology (I²IT)",
    address: "P-14, Rajiv Gandhi Infotech Park, MIDC Phase 1, Hinjawadi",
    locality: "Hinjawadi",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411057",
    landmark: "Near Infosys Circle, Phase 1",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5358045937175!2d73.73602127592476!3d18.595000566896264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb95f6ef85db%3A0x7d6f55562722b5e2!2sInternational%20Institute%20of%20Information%20Technology%20(I%C2%B2IT)!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin",
    mapDirectionsUrl: "https://maps.google.com/?q=International+Institute+of+Information+Technology+Hinjawadi+Pune",
    transit: [
      {
        mode: "Metro",
        desc: "Upcoming Pune Metro Line 3 connects to Hinjawadi Phase 1 station near the campus.",
      },
      {
        mode: "PMPML Bus",
        desc: "Direct buses available from Pune Station, Swargate, and Shivaji Nagar to Hinjawadi Phase 1.",
      },
      {
        mode: "By Road",
        desc: "Accessible via Mumbai-Pune Expressway & Wakad flyover; dedicated visitor parking inside campus.",
      },
    ],
  },

  // --- Contact & Official Links ---
  contact: {
    email: "awscommunity@isquareit.edu.in",
    altEmail: "info@isquareit.edu.in",
    phone: "+91 20 2293 4191",
    collegeWebsite: "https://www.isquareit.edu.in/",
    socials: {
      linkedin: "https://www.linkedin.com/school/international-institute-of-information-technology-i2it-/",
      twitter: "https://twitter.com/i2it_pune",
      instagram: "https://www.instagram.com/i2it_pune/",
      github: "https://github.com/i2it-aws-community",
    },
  },

  // --- Event Pillars / About Points ---
  aboutPillars: [
    {
      title: "Learn Cloud Fundamentals",
      description: "Demystify AWS core primitives: EC2, S3, IAM, and VPC through intuitive architectural breakdowns.",
      icon: "Cloud",
    },
    {
      title: "Build Serverless & GenAI",
      description: "Experience modern application patterns with AWS Lambda, Amazon Bedrock, DynamoDB, and LangChain.",
      icon: "Cpu",
    },
    {
      title: "Innovate with Open Source",
      description: "Discover community projects, developer tooling, and modern CI/CD pipelines deployed to production.",
      icon: "Sparkles",
    },
    {
      title: "Connect & Network",
      description: "Engage with AWS Community Builders, cloud architects, peer student innovators, and alumni mentors.",
      icon: "Users",
    },
  ],

  // --- Event Highlights ---
  highlights: [
    {
      id: "cloud-computing",
      title: "AWS Cloud Fundamentals",
      category: "Infrastructure",
      description:
        "Understand foundational global cloud architecture, high-availability design, VPC networking, and cost-effective cloud resource scaling.",
      icon: "Cloud",
      gradient: "from-amber-500/20 to-orange-500/10",
      accent: "#FF9900",
      topics: ["VPC & Subnets", "EC2 & Auto-scaling", "S3 Storage Classes", "IAM Security Guardrails"],
    },
    {
      id: "gen-ai-ml",
      title: "Generative AI on AWS",
      category: "Artificial Intelligence",
      description:
        "Hands-on architectural exploration of Amazon Bedrock, Foundation Models (Claude, Titan), RAG architecture, and agentic workflows.",
      icon: "Sparkles",
      gradient: "from-purple-500/20 to-indigo-500/10",
      accent: "#8B5CF6",
      topics: ["Amazon Bedrock", "Retrieval-Augmented Generation", "Vector DBs on OpenSearch", "Prompt Engineering"],
    },
    {
      id: "serverless-apps",
      title: "Serverless & Microservices",
      category: "Modern Architecture",
      description:
        "Construct resilient, zero-idle-cost cloud apps using AWS Lambda, API Gateway, Amazon EventBridge, and DynamoDB single-table designs.",
      icon: "Zap",
      gradient: "from-blue-500/20 to-cyan-500/10",
      accent: "#38BDF8",
      topics: ["AWS Lambda", "API Gateway REST/HTTP", "Event-Driven Systems", "DynamoDB NoSQL"],
    },
    {
      id: "cloud-security",
      title: "Cloud Security & DevSecOps",
      category: "Security & Governance",
      description:
        "Learn the AWS Shared Responsibility Model, least-privilege IAM policies, automated compliance scanning, and KMS encryption standards.",
      icon: "ShieldCheck",
      gradient: "from-emerald-500/20 to-teal-500/10",
      accent: "#10B981",
      topics: ["Zero Trust Architecture", "IAM Policies & Roles", "AWS WAF & Shield", "Secrets Manager"],
    },
    {
      id: "hands-on-workshops",
      title: "Hands-on Technical Lab",
      category: "Interactive Practice",
      description:
        "Step-by-step guided coding session where each student builds and deploys an interactive AI-powered web app onto AWS infrastructure live.",
      icon: "Terminal",
      gradient: "from-rose-500/20 to-orange-500/10",
      accent: "#F43F5E",
      topics: ["Live Coding", "AWS Amplify Hosting", "Serverless API integration", "Deployment Verification"],
    },
    {
      id: "student-showcase",
      title: "Student Showcase & Q&A",
      category: "Community & Career",
      description:
        "Showcase innovative student cloud projects, receive direct feedback from senior architects, and explore AWS certification roadmaps.",
      icon: "Award",
      gradient: "from-yellow-500/20 to-amber-500/10",
      accent: "#FBBF24",
      topics: ["Project Demos", "AWS Certifications Guide", "Resume & Career Tips", "Open Community Q&A"],
    },
  ],

  // --- Agenda Schedule ---
  agenda: [
    {
      time: "08:30 AM – 09:30 AM",
      track: "Registration",
      type: "logistics",
      title: "Registration, Attendee Check-In & Welcome Kit",
      speaker: "Organizing Committee",
      venue: "Auditorium Foyer",
      description: "Pick up your attendee badge, event agenda, sticker pack, and configure your laptop WiFi connection.",
      badge: "Check-in",
    },
    {
      time: "09:30 AM – 10:15 AM",
      track: "Keynote",
      type: "keynote",
      title: "Opening Keynote: The Future of Cloud & Student Innovation",
      speaker: "Guest Keynote Speaker (To Be Announced)",
      venue: "Main Auditorium",
      description:
        "Inaugural address highlighting modern cloud industry paradigms, AI-native infrastructure, and how students can accelerate their tech careers.",
      badge: "Inaugural",
    },
    {
      time: "10:15 AM – 11:15 AM",
      track: "Technical",
      type: "technical",
      title: "Demystifying Modern Cloud Architecture on AWS",
      speaker: "Cloud Solutions Architect (Tentative)",
      venue: "Main Auditorium",
      description:
        "Deep dive into well-architected cloud principles, reliability patterns, VPC networks, and multi-tier containerized deployments.",
      badge: "Architecture",
    },
    {
      time: "11:15 AM – 11:30 AM",
      track: "Break",
      type: "logistics",
      title: "Tea & Networking Intermission",
      speaker: "Community Lounge",
      venue: "Central Courtyard",
      description: "Interact with peer attendees, meet community leaders, and discuss morning keynote insights.",
      badge: "Networking",
    },
    {
      time: "11:30 AM – 12:45 PM",
      track: "Technical",
      type: "technical",
      title: "Building Generative AI Applications with Amazon Bedrock",
      speaker: "AI/ML Community Specialist (Tentative)",
      venue: "Main Auditorium",
      description:
        "Learn how to integrate LLMs, orchestrate multi-agent workflows, and implement secure RAG architectures on AWS without managing GPUs.",
      badge: "Generative AI",
    },
    {
      time: "12:45 PM – 01:45 PM",
      track: "Break",
      type: "logistics",
      title: "Networking Lunch & Community Showcase",
      speaker: "All Participants",
      venue: "Campus Cafeteria",
      description: "Enjoy lunch provided at campus while exploring student demo booths and partner kiosks.",
      badge: "Lunch",
    },
    {
      time: "01:45 PM – 03:30 PM",
      track: "Workshop",
      type: "workshop",
      title: "Hands-on Workshop: Deploying a Serverless Full-Stack App",
      speaker: "Technical Workshop Mentors (Tentative)",
      venue: "Computer Labs 3 & 4",
      description:
        "Guided hands-on session. Attendees code and deploy a serverless REST API using AWS Lambda, API Gateway, DynamoDB, and React on AWS Amplify.",
      badge: "Hands-on Lab",
    },
    {
      time: "03:30 PM – 04:30 PM",
      track: "Community",
      type: "community",
      title: "I²IT Student Cloud Showcase & Lightning Talks",
      speaker: "Shortlisted Student Innovators",
      venue: "Main Auditorium",
      description:
        "5-minute rapid lightning talks showcasing innovative cloud projects built by I²IT students and peer college innovators.",
      badge: "Student Talks",
    },
    {
      time: "04:30 PM – 05:15 PM",
      track: "Career",
      type: "community",
      title: "Ask-Me-Anything: Cloud Careers, Certifications & Q&A",
      speaker: "Industry Panelists & Alumni Mentors",
      venue: "Main Auditorium",
      description:
        "Interactive panel discussion answering student questions about AWS certifications (Cloud Practitioner, Solutions Architect), interview prep, and open source contributions.",
      badge: "Career Panel",
    },
    {
      time: "05:15 PM – 05:30 PM",
      track: "Closing",
      type: "logistics",
      title: "Closing Remarks, Digital Badges & Vote of Thanks",
      speaker: "Faculty Coordinators & Student Leads",
      venue: "Main Auditorium",
      description:
        "Summary of event takeaways, announcement of student showcase recognitions, commemorative badge generation, and group photo.",
      badge: "Valedictory",
    },
  ],

  // --- Speakers Section (Tentative & Sample Placeholders) ---
  speakersNote:
    "Speaker invitations and topic confirmations are currently underway. The profiles below represent sample roles and prospective topics for the 2026 symposium.",
  speakers: [
    {
      id: "sp-1",
      name: "Speaker To Be Announced",
      role: "Principal Solutions Architect",
      organization: "Cloud Enterprise Systems",
      topic: "Building Resilient Distributed Architectures on AWS",
      avatarPlaceholder: "SA",
      status: "Invited / Confirmation in Progress",
      bio: "Seasoned cloud architect specializing in mission-critical distributed systems, container orchestration, and multi-region disaster recovery.",
      linkedin: "https://www.linkedin.com/",
      tags: ["Cloud Architecture", "Reliability", "AWS Well-Architected"],
    },
    {
      id: "sp-2",
      name: "Speaker To Be Announced",
      role: "AWS Community Builder & AI Specialist",
      organization: "Generative AI Research Labs",
      topic: "Serverless Generative AI: From Prompt to Production with Bedrock",
      avatarPlaceholder: "AI",
      status: "Invited / Confirmation in Progress",
      bio: "Active developer community contributor and author specializing in LLM application architecture, vector databases, and agentic workflows.",
      linkedin: "https://www.linkedin.com/",
      tags: ["Generative AI", "Amazon Bedrock", "Python"],
    },
    {
      id: "sp-3",
      name: "Speaker To Be Announced",
      role: "Senior DevSecOps Engineer",
      organization: "Cloud Security Solutions",
      topic: "Zero-Trust Cloud: Hardening IAM & Automated Guardrails",
      avatarPlaceholder: "SEC",
      status: "Invited / Confirmation in Progress",
      bio: "Focuses on automated cloud compliance, infrastructure as code security scanning, and modern policy-as-code paradigms.",
      linkedin: "https://www.linkedin.com/",
      tags: ["Cloud Security", "DevSecOps", "AWS IAM"],
    },
    {
      id: "sp-4",
      name: "Speaker To Be Announced",
      role: "Student Cloud Lead & Open Source Dev",
      organization: "I²IT Student Tech Community",
      topic: "From Classroom to Cloud: Practical Tips for Student Developers",
      avatarPlaceholder: "ST",
      status: "Student Speaker Slot",
      bio: "Undergraduate developer passionate about cloud-native technologies, student hackathons, and fostering peer-to-peer cloud study circles.",
      linkedin: "https://www.linkedin.com/",
      tags: ["Student Innovation", "Serverless", "Career Journey"],
    },
  ],

  // --- Organizers & Community ---
  organizers: {
    facultyAdvisors: [
      {
        name: "Dr. Faculty Mentor (Placeholder)",
        designation: "Faculty Advisor & Head of Department",
        department: "Department of Information Technology, I²IT Pune",
      },
      {
        name: "Prof. Faculty Coordinator (Placeholder)",
        designation: "Assistant Professor & Tech Club In-Charge",
        department: "Department of Computer Engineering, I²IT Pune",
      },
    ],
    studentTeam: [
      {
        name: "Student Community Lead",
        role: "Event Convener & Lead Organizer",
        department: "B.E. Information Technology",
      },
      {
        name: "Technical Operations Lead",
        role: "Workshop & Lab Coordinator",
        department: "B.E. Computer Engineering",
      },
      {
        name: "Design & Outreach Lead",
        role: "Creative Media & Communications",
        department: "B.E. Data Science / AI",
      },
      {
        name: "Logistics & Hospitality Lead",
        role: "Venue & Attendee Support",
        department: "B.E. Electronics & Telecom",
      },
    ],
    participatingClubs: [
      {
        name: "I²IT ACM Student Chapter",
        focus: "Computing Machinery & Student Tech Competitions",
      },
      {
        name: "Google Developer Student Club (GDSC) I²IT",
        focus: "Mobile, Web & Cloud Developer Ecosystems",
      },
      {
        name: "I²IT Cyber Security & Cloud Club",
        focus: "Network Security, CTF Challenges & Infrastructure",
      },
    ],
  },

  // --- Sponsors & Partners (Placeholders with Prospectus) ---
  sponsors: {
    disclaimer:
      "All sponsor categories below are placeholder slots for prospective partners. No formal corporate sponsorships are claimed until legal agreements are finalized.",
    tiers: [
      {
        tierName: "Title Partner Slot",
        badge: "Powered By",
        slots: [
          { name: "Prospective Title Partner", status: "Slot Available", placeholderText: "Title Sponsor Slot Open" },
        ],
      },
      {
        tierName: "Cloud & Technology Partners",
        badge: "Tech Enabler",
        slots: [
          { name: "Cloud Partner A", status: "Slot Available", placeholderText: "Cloud Platform Partner" },
          { name: "Dev Tools Partner B", status: "Slot Available", placeholderText: "Developer Tools Partner" },
        ],
      },
      {
        tierName: "Community & Media Partners",
        badge: "Ecosystem",
        slots: [
          { name: "Student Community Partner", status: "Open", placeholderText: "Tech Community Partner" },
          { name: "Campus Media Partner", status: "Open", placeholderText: "Media & Outreach Partner" },
        ],
      },
    ],
    prospectusEmail: "awscommunity@isquareit.edu.in",
  },

  // --- Frequently Asked Questions ---
  faqs: [
    {
      question: "Who is eligible to attend the AWS Student Community Day?",
      answer:
        "The event is specifically organized for undergraduate and postgraduate college students from I²IT and neighboring engineering institutions across Pune and Maharashtra. Developers, early-career engineers, and faculty interested in cloud computing and AI are also warmly welcome.",
    },
    {
      question: "Is there any registration fee for the event?",
      answer:
        "No. AWS Student Community Day at I²IT is an independent student-led community initiative, and attendance is free of charge. However, because lab and auditorium capacity is strictly limited to 350 attendees, prior online registration is mandatory.",
    },
    {
      question: "Do I need prior AWS or cloud computing experience?",
      answer:
        "Not at all! The morning sessions begin with foundational concepts suitable for complete beginners. Intermediate and advanced tracks (such as Generative AI and Serverless) will provide deep insights for experienced builders. Everyone will learn something valuable.",
    },
    {
      question: "Should I bring my own laptop?",
      answer:
        "Yes, bringing a laptop with modern browser software (Chrome, Firefox, or Edge) and WiFi capabilities is highly recommended if you wish to participate in the afternoon hands-on serverless workshop.",
    },
    {
      question: "Will certificates or badges be provided to attendees?",
      answer:
        "All verified in-person participants will receive a verifiable Commemorative Digital Badge of Participation from the student community team. Please note: this is an event participation badge and is NOT an official Amazon Web Services (AWS) corporate professional certification.",
    },
    {
      question: "How can I submit a student project to the showcase?",
      answer:
        "Students who have built cloud, serverless, or AI projects on AWS can apply through the project showcase submission link in the registration form or by contacting the student technical team via email at awscommunity@isquareit.edu.in.",
    },
    {
      question: "How do I reach the I²IT campus in Hinjawadi?",
      answer:
        "I²IT is centrally located at P-14 Rajiv Gandhi Infotech Park, MIDC Phase 1, Hinjawadi, Pune (near Infosys Circle). PMPML buses run frequently from Pune Railway Station and Shivajinagar. Two-wheeler and four-wheeler parking is available inside the campus.",
    },
  ],

  // --- Official Disclaimers ---
  disclaimers: {
    trademark:
      "Amazon Web Services, AWS, the Powered by AWS logo, and any related AWS marks are trademarks of Amazon.com, Inc. or its affiliates in the United States and/or other countries.",
    communityNotice:
      "This is an independent student-organized community event hosted at the International Institute of Information Technology (I²IT), Pune. It is not organized or sponsored directly by Amazon Web Services (AWS) Inc. unless explicitly announced with verified partnership credentials.",
    academicNotice:
      "All event schedules, speakers, and venue arrangements are subject to final confirmation by college administrative authorities.",
  },
};
