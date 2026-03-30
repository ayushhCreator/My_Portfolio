import React from 'react';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import { education, certificationDetails } from '../data/portfolio';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-shell">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
          <h2 className="section-title">
            Education & <span className="brand-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto">Academic foundation backed by practical technical certifications.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-4">
            {education.map((item, index) => (
              <Reveal key={`${item.degree}-${item.period}`} delay={index * 0.08}>
                <TiltCard className="glass-card p-6">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                    <GraduationCap size={18} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-100">{item.degree}</h3>
                    <p className="mt-1 text-cyan-300">{item.institution}</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-400">
                      <Calendar size={14} />
                      {item.duration ?? item.period}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        CGPA: {item.cgpa}
                      </span>
                      {item.note ? (
                        <span className="rounded-full border border-emerald-300/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                          {item.note}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-2" delay={0.1}>
            <TiltCard className="glass-card p-6 h-fit">
            <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
              <Award size={18} className="text-cyan-300" />
              Certifications
            </h3>
            <ul className="mt-5 space-y-3">
              {certificationDetails.map((cert) => (
                <li key={cert.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-slate-100">{cert.name}</p>
                  <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
                </li>
              ))}
            </ul>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;