import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, ArrowRight } from 'lucide-react';
import profileImage from '../assets/newpic.jpeg';
import { personalInfo, roles, stats } from '../data/portfolio';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = personalInfo.name;
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, [fullText]);

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: personalInfo.githubUrl,
      label: 'GitHub',
      color: 'hover:bg-slate-700'
    },
    { 
      icon: <Linkedin size={20} />, 
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      color: 'hover:bg-blue-600/80'
    },
    { 
      icon: <Twitter size={20} />, 
      href: personalInfo.twitterUrl,
      label: 'Twitter',
      color: 'hover:bg-sky-500/80'
    },
    { 
      icon: <Mail size={20} />, 
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'hover:bg-rose-500/80'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-24 md:pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <MapPin size={16} /> {personalInfo.location}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
              <span className="inline-block">Hi, I’m</span>
              <br />
              <span className="brand-gradient inline-flex items-center">
                {displayedText}
                <span className="ml-1 animate-pulse text-indigo-300">|</span>
              </span>
            </h1>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              {roles.map((role) => (
                <span key={role} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  {role}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-slate-300 leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-900/30"
              >
                Explore Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-200 hover:bg-white/10"
              >
                Let’s Talk
              </a>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition ${link.color}`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((item) => (
                <div key={item.label} className="glass-card px-4 py-3 text-center">
                  <p className="text-lg font-bold text-slate-100">{item.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 opacity-30 blur-2xl" />
              <div className="relative z-10 h-72 w-72 sm:h-80 sm:w-80 lg:h-[25rem] lg:w-[25rem] overflow-hidden rounded-full border-4 border-white/20 shadow-2xl shadow-indigo-900/50">
                <img
                  src={profileImage}
                  alt={`${personalInfo.name} profile`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
