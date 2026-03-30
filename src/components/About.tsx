import React from 'react';
import { User, MapPin, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { aboutText, personalInfo } from '../data/portfolio';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

const About: React.FC = () => {
  const socialLinks = [
    { 
      icon: <Github size={18} />, 
      href: personalInfo.githubUrl,
      label: 'GitHub',
      color: 'hover:bg-slate-700 hover:text-white'
    },
    { 
      icon: <Linkedin size={18} />, 
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    { 
      icon: <Twitter size={18} />, 
      href: personalInfo.twitterUrl,
      label: 'Twitter',
      color: 'hover:bg-blue-400 hover:text-white'
    }
  ];

  return (
    <section id="about" className="section-shell">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 glass-card p-6 md:p-8">
            <h2 className="section-title">
              About <span className="brand-gradient">Me</span>
            </h2>
            <p className="section-subtitle">A quick snapshot of who I am and what I build.</p>
            <p className="mt-6 text-slate-300 leading-relaxed">{aboutText}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition ${link.color}`}
                  aria-label={link.label}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-4">
            <TiltCard className="glass-card p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                  <User size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Name</p>
                  <p className="text-slate-100 font-semibold mt-1">{personalInfo.name}</p>
                </div>
              </div>
            </TiltCard>

            <TiltCard className="glass-card p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-100 font-semibold mt-1 block break-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard className="glass-card p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Phone</p>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-slate-100 font-semibold mt-1 block">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard className="glass-card p-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">Location</p>
                  <p className="text-slate-100 font-semibold mt-1">{personalInfo.location}</p>
                </div>
              </div>
            </TiltCard>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;