import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

  return (
    <section id="projects" className="section-shell">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
          <h2 className="section-title">
            Featured <span className="brand-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">Hands-on builds from production systems to collaborative platforms.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <TiltCard
              className={`glass-card p-6 transition ${
                activeProject === index ? 'ring-2 ring-indigo-400/60' : ''
              }`}
              >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                  {'subtitle' in project && project.subtitle ? (
                    <p className="mt-1 text-sm text-cyan-300">{project.subtitle}</p>
                  ) : null}
                </div>
                {'badge' in project && project.badge ? (
                  <span className="rounded-full border border-indigo-300/30 bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-200">
                    {project.badge}
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.description}</p>

              {'stats' in project && project.stats ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stats.map((stat) => (
                    <span key={stat} className="rounded-full border border-emerald-300/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                      {stat}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              {'highlights' in project && project.highlights ? (
                <div className="mt-5">
                  <button
                    onClick={() => toggleProject(index)}
                    className="text-sm font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                  >
                    {activeProject === index ? 'Hide details' : 'View details'}
                  </button>

                  {activeProject === index ? (
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {project.highlights.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                ) : null}

                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                ) : null}
              </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;