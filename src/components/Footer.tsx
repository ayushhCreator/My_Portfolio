import React from 'react';
import { ChevronUp, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/ayushhCreator' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/ayush-raj-633526186' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/ayushh_74' },
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/ayushh74' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <a 
            href="#home" 
            className="bg-teal-600 hover:bg-teal-700 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronUp size={24} />
          </a>
        </div>
        
        {/* <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ayush Raj</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Software Developer specialized in building exceptional digital experiences.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div> */}
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Ayush Raj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;