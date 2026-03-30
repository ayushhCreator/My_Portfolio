import React from 'react';
import { Code2, Database, Boxes, ShieldCheck, Wrench } from 'lucide-react';
import { skills } from '../data/portfolio';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

const iconMap: Record<string, React.ReactNode> = {
  Languages: <Code2 size={18} />,
  Frameworks: <Boxes size={18} />,
  Databases: <Database size={18} />,
  'APIs & Auth': <ShieldCheck size={18} />,
  'DevOps & Tools': <Wrench size={18} />
};

const Skills: React.FC = () => {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section-shell">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
          <h2 className="section-title">
            Technical <span className="brand-gradient">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">Tools and technologies I use to ship reliable products.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.06}>
              <TiltCard className="glass-card p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-100">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                  {iconMap[category] ?? <Code2 size={18} />}
                </span>
                {category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs md:text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
