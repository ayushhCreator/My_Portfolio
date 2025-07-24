import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sections = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/ayushhCreator', color: 'hover:text-gray-700' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/ayush-raj-633526186', color: 'hover:text-blue-600' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/ayushh_74', color: 'hover:text-pink-500' },
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/ayushh74', color: 'hover:text-blue-700' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-3 border-b border-gray-100' 
          : 'bg-transparent py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300">
            Ayush Raj
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {sections.map((section) => (
              <a 
                key={section.name}
                href={section.href}
                className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium relative group text-sm lg:text-base"
              >
                {section.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none transition-colors duration-300 p-2"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 animate-fadeIn">
            <div className="flex flex-col space-y-4 px-6">
              {sections.map((section) => (
                <a 
                  key={section.name}
                  href={section.href}
                  className="text-gray-700 hover:text-indigo-600 py-3 transition-all duration-300 font-medium border-b border-gray-100 last:border-b-0 hover:pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.name}
                </a>
              ))}
            </div>
            
            <div className="flex justify-center space-x-6 mt-6 pt-6 border-t border-gray-200">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 ${link.color} transition-all duration-300 hover:scale-110`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;