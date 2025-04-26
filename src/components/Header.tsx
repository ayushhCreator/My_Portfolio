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
    { icon: <Github size={20} />, href: 'https://github.com/ayushhCreator' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/ayush-raj-633526186' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/ayushh_74' },
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/ayushh74' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-teal-600">Ayush Raj</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <a 
                key={section.name}
                href={section.href}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
              >
                {section.name}
              </a>
            ))}
          </nav>

          {/* Social Links - Desktop
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div> */}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 px-4">
              {sections.map((section) => (
                <a 
                  key={section.name}
                  href={section.href}
                  className="text-gray-700 hover:text-teal-600 py-2 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.name}
                </a>
              ))}
            </div>
            
            <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-100">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-colors"
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