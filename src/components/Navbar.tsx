import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      const onScrollFallback = () => {
        const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
        const offsetY = window.scrollY + 120;

        for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
          const section = document.getElementById(sectionIds[index]);
          if (section && section.offsetTop <= offsetY) {
            setActiveSection(sectionIds[index]);
            break;
          }
        }
      };

      onScrollFallback();
      window.addEventListener('scroll', onScrollFallback);
      return () => window.removeEventListener('scroll', onScrollFallback);
    }

    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-40% 0px -40% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const initials = personalInfo.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 font-bold text-white">
              {initials}
            </span>
            <span className="hidden sm:block text-sm font-semibold text-slate-200">
              {personalInfo.name}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`group text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`mt-1 block h-[2px] rounded-full transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'w-full bg-gradient-to-r from-indigo-400 to-cyan-400 duration-300 ease-out'
                      : 'w-0 bg-gradient-to-r from-indigo-400 to-cyan-400 duration-300 ease-out group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>

          <a
            href={`https://${personalInfo.portfolio}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-500/20 px-4 py-2 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/30 transition-colors"
          >
            Portfolio
            <ArrowUpRight size={16} />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-slate-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[#050816]/95"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium ${
                    activeSection === link.href.slice(1) ? 'text-cyan-300' : 'text-slate-200'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-cyan-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
