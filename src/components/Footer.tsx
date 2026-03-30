import React from 'react';
import { ChevronUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import Reveal from './Reveal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
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
    <footer className="border-t border-white/10 bg-[#030617] py-14 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex justify-center">
          <a
            href="#home"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200"
          >
            <ChevronUp size={20} />
          </a>
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center" delay={0.05}>
          <h2 className="text-2xl md:text-3xl font-bold brand-gradient">{personalInfo.name}</h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto">
            Backend-focused full-stack developer building scalable products and clean developer experiences.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap justify-center gap-3" delay={0.1}>
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
        </Reveal>

        <Reveal className="mt-9 flex flex-wrap justify-center gap-6 text-sm text-slate-400" delay={0.15}>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </Reveal>

        <Reveal className="mt-9 border-t border-white/10 pt-6 text-center text-sm text-slate-500" delay={0.2}>
          <p>© {currentYear} {personalInfo.name}. Built with React + Tailwind.</p>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;