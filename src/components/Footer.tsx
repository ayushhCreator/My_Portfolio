import React from 'react';
import { ChevronUp, Github, Linkedin, Twitter, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/ayushhCreator',
      label: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    { 
      icon: <Linkedin size={20} />, 
      href: 'https://linkedin.com/in/ayush-raj-633526186',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: <Twitter size={20} />, 
      href: 'https://twitter.com/ayushhcreator',
      label: 'Twitter',
      color: 'hover:bg-blue-400'
    },
    { 
      icon: <Mail size={20} />, 
      href: 'mailto:ayushraj1501003@gmail.com',
      label: 'Email',
      color: 'hover:bg-red-500'
    },
    { 
      icon: <Instagram size={20} />, 
      href: 'https://www.instagram.com/ayushh_74',
      label: 'Instagram',
      color: 'hover:bg-pink-500'
    },
    { 
      icon: <Facebook size={20} />, 
      href: 'https://www.facebook.com/ayushh74',
      label: 'Facebook',
      color: 'hover:bg-blue-700'
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back to Top Button */}
        <div className="flex justify-center mb-12">
          <a 
            href="#home" 
            className="group bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl animate-pulseGlow hover-lift"
          >
            <ChevronUp size={24} className="group-hover:animate-bounce" />
          </a>
        </div>
        
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-gradientText bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Ayush Raj
          </h2>
          <p className="text-gray-300 max-w-md mx-auto text-lg leading-relaxed">
            Full-Stack Software Engineer specialized in building exceptional digital experiences with modern technologies.
          </p>
        </div>
        
        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon group bg-gray-800 ${link.color} w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover-lift border border-gray-700 hover:border-transparent`}
              aria-label={link.label}
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:underline">About</a>
          <a href="#experience" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:underline">Experience</a>
          <a href="#projects" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:underline">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:underline">Skills</a>
          <a href="#education" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:underline">Education</a>
          <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 hover:underline">Contact</a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
          <p>&copy; {currentYear} Ayush Raj. All rights reserved. Built with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;