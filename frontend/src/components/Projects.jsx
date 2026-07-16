import { useState } from 'react';
import SectionHeading from './SectionHeading';

const ALL_PROJECTS = [
  {
    title: 'Connecti',
    description:
      'A privacy-first proximity networking platform that reconnects people with verified shared history using geofencing, WebSockets, and mutual consent. Built with React Native, Kotlin, PostgreSQL, and real-time presence tracking.',
    url: '#',
    github: 'https://github.com/aditya-singh2005/Connecti',
    image: '/connecti4.png',
    tags: [
      'React Native',
      'Kotlin',
      'PostgreSQL',
      'WebSockets',
      'Geofencing',
      'Mobile'
    ],
    color: '#1864F3',
  },

  {
    title: 'FlowDash',
    description:
      'A complete employee management platform featuring JWT authentication, RBAC, attendance tracking, leave management, task assignment, analytics dashboards, and PostgreSQL-backed data management.',
    url: 'https://flowdash.onrender.com/',
    github: 'https://github.com/aditya-singh2005/FlowDash',
    image: '/flowdash5.png',
    tags: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
      'Chart.js'
    ],
    color: '#082dff',
  },

  {
    title: 'Connectify',
    description:
      'Real-time chat application powered by Socket.io with instant messaging, online presence, JWT authentication, Cloudinary integration, and optimized MongoDB schemas for low-latency communication.',
    url: 'https://connectify-qkf6.onrender.com/',
    github: 'https://github.com/aditya-singh2005/Connectify',
    image: '/connectify2.png',
    tags: [
      'MERN',
      'Socket.io',
      'MongoDB',
      'JWT',
      'WebSockets'
    ],
    color: '#8f51f9',
  },

  {
    title: 'Looply',
    description:
      'Enterprise-style goal tracking platform with multi-role RBAC, approval workflows, audit logging, check-ins, reporting, and PostgreSQL schema design built using Next.js and TypeScript.',
    url: 'https://looply-fsc.vercel.app/',
    github: 'https://github.com/aditya-singh2005/Looply',
    image: '/looply4.png',
    tags: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'RBAC',
      'PostgreSQL'
    ],
    color: '#36437f',
  },

  {
    title: 'Orbit Productivity',
    description:
      'VS Code extension that tracks coding activity, developer streaks, productivity analytics, and workflow insights using local persistence and interactive dashboards.',
    url: 'https://marketplace.visualstudio.com/items?itemName=orbit-extension.orbit-productivity-tracker',
    github: 'https://github.com/aditya-singh2005/Orbit-Prod-Extension',
    image: '/orbit3.png',
    tags: [
      'VS Code',
      'JavaScript',
      'Extension',
      'Analytics'
    ],
    color: '#361483',
  },

  {
    title: 'ProcessDash',
    description:
      'Interactive CPU Scheduling Simulator implementing eight scheduling algorithms with animated Gantt Charts, waiting time analysis, turnaround metrics, and OS performance comparison.',
    url: '#',
    github: 'https://github.com/aditya-singh2005/ProcessDash',
    image: '/process.png',
    tags: [
      'Operating Systems',
      'JavaScript',
      'Algorithms',
      'Visualization'
    ],
    color: '#9b58fa',
  },

  {
    title: 'AI Recruitment Engine',
    description:
      'Built for the Redrob Hackathon, this hybrid AI ranking engine evaluates over 100K candidates using sentence-transformer embeddings, weighted scoring, behavioral intelligence, and semantic search to generate recruiter-ready rankings in seconds.',
    url: 'https://colab.research.google.com/drive/10aLL_aFq-8Z7IfVfMysBfCK0DI4JCBA1?usp=sharing',
    github: 'https://github.com/aditya-singh2005/Redrob-Hackathon-AI-Recruitment-Engine',
    image: '/redrob5.png',
    tags: [
      'Python',
      'Sentence Transformers',
      'NLP',
      'Semantic Search',
      'Ranking',
      'AI'
    ],
    color: '#ea47cf',
  },
  {
    title: 'Flipkart Gridlock AI',
    description:
      'Traffic prediction model developed for Flipkart Gridlock Hackathon using LightGBM, Group K-Fold validation, and feature engineering on real Bengaluru traffic data. Achieved an R² score of 0.916 and public leaderboard score of 89.66.',
    url: 'https://colab.research.google.com/drive/1PORaZDFY0GdbMsJTCN7q3F5CnH-UWe4v?usp=sharing',
    github: 'https://github.com/aditya-singh2005/Flipkart-Gridlock-2.0-Bengaluru-Traffic-AI-Prediction',
    image: '/flipkart3.png',
    tags: [
      'LightGBM',
      'Machine Learning',
      'Regression',
      'Python',
      'Hackathon'
    ],
    color: '#3b1ee2',
  },

  {
    title: 'Plastic Polymer Classifier',
    description:
      'Machine learning system that classifies six plastic polymer types from FTIR spectroscopy data using Random Forest and SVM models, achieving up to 93.89% classification accuracy.',
    url: '#',
    github: 'https://github.com/aditya-singh2005/Plastic-Classification---Machine-Learning-',
    image: '/plastic2.png',
    tags: [
      'Python',
      'Random Forest',
      'SVM',
      'Scikit-learn',
      'Classification'
    ],
    color: '#32ae16',
  },
];

const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 3;

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group [perspective:1200px] h-[360px]"
    >
      <div className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] rounded-[1.25rem] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[1.25rem] [backface-visibility:hidden] overflow-hidden bg-slate-900 shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_4px_rgba(0,0,0,0.08)] border border-white/55 cursor-pointer"
          style={{ zIndex: flipped ? 0 : 1, pointerEvents: flipped ? 'none' : 'auto' }}
          onClick={() => { if (!flipped) setFlipped(true); }}
        >
          <div
            className="absolute inset-0 overflow-hidden bg-slate-900"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div
              className="absolute inset-0" 
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 8%, rgba(0,0,0,0.45)  15%, rgba(0,0,0,0.18) 22%, rgba(0,0,0,0) 30%)",
              }} />
          </div>
          {/* bottom-left label */}
          <div className="absolute bottom-0 left-0 right-0 p-3.5 z-10">
            <p className="text-[.95rem] font-bold text-white leading-tight mb-1.5 tracking-tight">{project.title}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span key={t} className="text-[0.55rem] font-semibold px-1.5 py-0.5 rounded-full bg-white/10 text-white/85 backdrop-blur-[4px] border border-white/15 tracking-wide uppercase">{t}</span>
              ))}
            </div>
          </div>
          {/* flip hint */}
          <div className="absolute top-3 right-3 flex items-center gap-1 text-[0.6rem] font-semibold text-white/60 bg-black/35 backdrop-blur-md border border-white/10 px-2 py-1 rounded-full tracking-wide transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-10">
            <span className="material-symbols-outlined text-[0.8rem]">flip</span>
            <span>Details</span>
          </div>
        </div>

        {/* BACK */}
        <div 
          className="absolute inset-0 rounded-[1.25rem] [backface-visibility:hidden] overflow-hidden [transform:rotateY(180deg)] shadow-[0_4px_24px_rgba(0,0,0,0.1)] flex flex-col cursor-pointer"
          style={{
            backgroundColor: `${project.color}10  `,
            border: `1px solid ${project.color}30`,
            zIndex: flipped ? 1 : 0,
            pointerEvents: flipped ? 'auto' : 'none',
          }}
          onClick={() => { if (flipped) setFlipped(false); }}
        >
          <div className="h-1.5 w-full shrink-0" style={{ background: project.color }} />
          <div className="flex-1 p-6 flex flex-col relative">
            <p className="text-[1.25rem] font-extrabold mb-3 leading-snug tracking-tight" style={{ color: project.color }}>{project.title}</p>
            <p className="text-[0.9rem] text-slate-700 leading-relaxed flex-1 font-medium">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((t) => (
                <span 
                  key={t} 
                  className="text-[0.65rem] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase"
                  style={{ 
                    backgroundColor: `${project.color}15`, 
                    color: project.color, 
                    border: `1px solid ${project.color}30` 
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3 mt-6">
              {project.url && project.url !== '#' && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[0.85rem] font-bold no-underline transition-all tracking-wide text-white hover:-translate-y-[2px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] active:translate-y-0"
                  style={{ backgroundColor: project.color, boxShadow: `0 4px 14px ${project.color}40` }}
                >
                  <span className="material-symbols-outlined text-[1rem]">open_in_new</span>
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[0.85rem] font-bold no-underline transition-all tracking-wide bg-white hover:bg-slate-50 hover:-translate-y-[2px] active:translate-y-0"
                style={{ color: project.color, border: `2px solid ${project.color}40` }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
            <button
              className="absolute top-4 right-4 w-8 h-8 rounded-full border-none cursor-pointer flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              style={{ backgroundColor: `${project.color}15`, color: project.color }}
              onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
            >
              <span className="material-symbols-outlined text-[1.1rem]">close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleProjects = ALL_PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_PROJECTS.length;

  return (
    <section className="px-4 md:px-8 mb-24">
      <SectionHeading title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1280px] mx-auto">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-14 text-center">
          <button
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold cursor-pointer transition-all tracking-tight shadow-[0_4px_14px_rgba(15,23,42,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,23,42,0.3)] hover:bg-slate-800 active:translate-y-0"
            onClick={() => setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, ALL_PROJECTS.length))}
          >
            <span className="material-symbols-outlined text-[1.1rem]">add_circle</span>
            Load More Projects
          </button>
        </div>
      )}
    </section>
  );
}
