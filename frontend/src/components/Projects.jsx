import { useState } from 'react';
import SectionHeading from './SectionHeading';

const ALL_PROJECTS = [
  {
    title: 'Connecti',
    description:
      'A privacy-first proximity networking platform that reconnects people with verified shared history using geofencing, WebSockets, and mutual consent. Built with React Native, Kotlin, PostgreSQL, and real-time presence tracking.',
    url: '#',
    github: '#',
    image: '/project_connecti.png',
    tags: [
      'React Native',
      'Kotlin',
      'PostgreSQL',
      'WebSockets',
      'Geofencing',
      'Mobile'
    ],
    color: '#2563eb',
  },

  {
    title: 'FlowDash',
    description:
      'A complete employee management platform featuring JWT authentication, RBAC, attendance tracking, leave management, task assignment, analytics dashboards, and PostgreSQL-backed data management.',
    url: '#',
    github: '#',
    image: '/project_flowdash.png',
    tags: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
      'Chart.js'
    ],
    color: '#0f766e',
  },

  {
    title: 'Connectify',
    description:
      'Real-time chat application powered by Socket.io with instant messaging, online presence, JWT authentication, Cloudinary integration, and optimized MongoDB schemas for low-latency communication.',
    url: '#',
    github: '#',
    image: '/project_connectify.png',
    tags: [
      'MERN',
      'Socket.io',
      'MongoDB',
      'JWT',
      'WebSockets'
    ],
    color: '#16a34a',
  },

  {
    title: 'Looply',
    description:
      'Enterprise-style goal tracking platform with multi-role RBAC, approval workflows, audit logging, check-ins, reporting, and PostgreSQL schema design built using Next.js and TypeScript.',
    url: '#',
    github: '#',
    image: '/project_looply.png',
    tags: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'RBAC',
      'PostgreSQL'
    ],
    color: '#7c3aed',
  },

  {
    title: 'Orbit Productivity',
    description:
      'VS Code extension that tracks coding activity, developer streaks, productivity analytics, and workflow insights using local persistence and interactive dashboards.',
    url: '#',
    github: '#',
    image: '/project_orbit.png',
    tags: [
      'VS Code',
      'JavaScript',
      'Extension',
      'Analytics'
    ],
    color: '#f59e0b',
  },

  {
    title: 'ProcessDash',
    description:
      'Interactive CPU Scheduling Simulator implementing eight scheduling algorithms with animated Gantt Charts, waiting time analysis, turnaround metrics, and OS performance comparison.',
    url: '#',
    github: '#',
    image: '/project_processdash.png',
    tags: [
      'Operating Systems',
      'JavaScript',
      'Algorithms',
      'Visualization'
    ],
    color: '#dc2626',
  },

  {
    title: 'AI Recruitment Engine',
    description:
      'Built for the Redrob Hackathon, this hybrid AI ranking engine evaluates over 100K candidates using sentence-transformer embeddings, weighted scoring, behavioral intelligence, and semantic search to generate recruiter-ready rankings in seconds.',
    url: '#',
    github: '#',
    image: '/project_redrob.png',
    tags: [
      'Python',
      'Sentence Transformers',
      'NLP',
      'Semantic Search',
      'Ranking',
      'AI'
    ],
    color: '#1d4ed8',
  },

  {
    title: 'Fraud Detection System',
    description:
      'Machine learning pipeline for detecting fraudulent financial transactions using Random Forest, XGBoost, Gradient Boosting, and SMOTE. Achieved 99.94% accuracy while handling highly imbalanced datasets.',
    url: '#',
    github: '#',
    image: '/project_fraud.png',
    tags: [
      'Python',
      'XGBoost',
      'Random Forest',
      'SMOTE',
      'ML'
    ],
    color: '#9333ea',
  },

  {
    title: 'Flipkart Gridlock AI',
    description:
      'Traffic prediction model developed for Flipkart Gridlock Hackathon using LightGBM, Group K-Fold validation, and feature engineering on real Bengaluru traffic data. Achieved an R² score of 0.916 and public leaderboard score of 89.66.',
    url: '#',
    github: '#',
    image: '/project_gridlock.png',
    tags: [
      'LightGBM',
      'Machine Learning',
      'Regression',
      'Python',
      'Hackathon'
    ],
    color: '#ea580c',
  },

  {
    title: 'Plastic Polymer Classifier',
    description:
      'Machine learning system that classifies six plastic polymer types from FTIR spectroscopy data using Random Forest and SVM models, achieving up to 93.89% classification accuracy.',
    url: '#',
    github: '#',
    image: '/project_plastic.png',
    tags: [
      'Python',
      'Random Forest',
      'SVM',
      'Scikit-learn',
      'Classification'
    ],
    color: '#0ea5e9',
  },
];

const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 3;

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="proj-card-scene"
      onClick={() => setFlipped((f) => !f)}
    >
      <div className={`proj-card-inner${flipped ? ' proj-card-flipped' : ''}`}>
        {/* FRONT */}
        <div className="proj-card-face proj-card-front">
          <div
            className="proj-card-img-wrap"
            style={{ background: project.color }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="proj-card-img"
              loading="lazy"
            />
            <div className="proj-card-img-overlay" />
          </div>
          {/* bottom-left label */}
          <div className="proj-card-label">
            <p className="proj-card-title">{project.title}</p>
            <div className="proj-card-tags">
              {project.tags.map((t) => (
                <span key={t} className="proj-tag">{t}</span>
              ))}
            </div>
          </div>
          {/* flip hint */}
          <div className="proj-flip-hint">
            <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>flip</span>
            <span>View details</span>
          </div>
        </div>

        {/* BACK */}
        <div className="proj-card-face proj-card-back">
          <div className="proj-back-accent" style={{ background: project.color }} />
          <div className="proj-back-content">
            <p className="proj-back-title">{project.title}</p>
            <p className="proj-back-desc">{project.description}</p>
            <div className="proj-card-tags" style={{ marginTop: '0.75rem' }}>
              {project.tags.map((t) => (
                <span key={t} className="proj-tag proj-tag-dark">{t}</span>
              ))}
            </div>
            <div className="proj-back-actions">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="proj-btn proj-btn-primary"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>open_in_new</span>
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="proj-btn proj-btn-ghost"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
            <button
              className="proj-back-close"
              onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>close</span>
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

      <div className="proj-grid">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-14 text-center">
          <button
            className="proj-load-more-btn"
            onClick={() => setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, ALL_PROJECTS.length))}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>add_circle</span>
            Load More Projects
            <span className="proj-load-badge">{ALL_PROJECTS.length - visibleCount} more</span>
          </button>
        </div>
      )}
    </section>
  );
}
