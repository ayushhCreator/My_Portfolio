import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/portfolio';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  const badgeStyles: Record<string, string> = {
    green: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
    blue: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
    yellow: 'bg-amber-500/20 text-amber-300 border-amber-400/30'
  };

  return (
    <section id="experience" className="section-shell">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
          <h2 className="section-title">
            Work <span className="brand-gradient">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">Internships and roles where I shipped production features.</p>
          </div>
        </Reveal>

        <div className="relative mt-12 max-w-5xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={`${item.company}-${item.duration}`} delay={index * 0.08}>
                  <article className="relative md:grid md:grid-cols-2 md:gap-8">
                  <div className={`${isLeft ? 'md:pr-8' : 'md:order-2 md:pl-8'} pl-12 md:pl-0`}>
                    <div className="glass-card p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg md:text-xl font-semibold text-slate-100">{item.title ?? item.role}</h3>
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[item.badgeColor] ?? badgeStyles.blue}`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <p className="mt-2 text-cyan-300 font-medium">{item.company}</p>
                      <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-400">
                        <Calendar size={14} />
                        {item.duration ?? item.date}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {item.bullets.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-300" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`${isLeft ? 'md:order-2' : ''}`} />

                  <div className="absolute left-4 top-8 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0b1224] text-indigo-300 md:left-1/2">
                    <Briefcase size={14} />
                  </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;