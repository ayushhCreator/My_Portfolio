import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import profileImage from '../assets/newpic.jpeg';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Ayush Raj';
  
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
  }, []);

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/ayushhCreator',
      label: 'GitHub',
      color: 'hover:bg-gray-800'
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
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden pt-16 md:pt-0">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-600"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-300"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="animate-slideInLeft">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 leading-tight">
                <span className="inline-block">Hello, I'm</span>
                <br />
                <span className="p-2 inline-block bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent relative">
                  {displayedText}
                  <span className="border-r-2 border-indigo-600 animate-pulse ml-1"></span>
                </span>
              </h1>
            </div>
            
            <div className="animate-slideInLeft animation-delay-300">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 font-medium">
                Full-Stack Software Engineer
              </h2>
            </div>
            
            <div className="animate-slideInLeft animation-delay-600">
              <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 text-base lg:text-lg leading-relaxed text-justify">
                Building scalable web applications with <span className="text-indigo-600 font-semibold">MERN stack</span> and <span className="text-cyan-600 font-semibold">Spring Boot</span>. 
                Experienced in creating real-time collaborative platforms and optimizing system performance.
              </p>
            </div>
            
            <div className="animate-slideInLeft animation-delay-900 flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulseGlow text-center"
              >
                <span className="relative z-10">Contact Me</span>
              </a>
              <a
                href="#projects"
                className="px-6 lg:px-8 py-3 lg:py-4 bg-white text-indigo-600 font-medium rounded-full hover:bg-gray-50 transition-all duration-300 border-2 border-indigo-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                View My Work
              </a>
            </div>

            {/* Social Links for Desktop */}
            <div className="hidden lg:flex space-x-4 animate-slideInLeft animation-delay-1200">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${link.color} hover:text-white group`}
                  aria-label={link.label}
                >
                  <div className="relative z-10">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slideInRight animation-delay-600 order-1 lg:order-2">
            <div className="relative">
              {/* Animated Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full animate-pulseGlow"></div>
              
              {/* Profile Image */}
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 sm:border-6 lg:border-8 border-white shadow-2xl animate-float">
                <img 
                  src={profileImage} 
                  alt="Ayush Raj - Full-Stack Software Engineer" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = profileImage;
                  }}
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full animate-bounce animation-delay-300"></div>
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-bounce animation-delay-600"></div>
            </div>
          </div>
        </div>

        {/* Social Links for Mobile */}
        {/* <div className="flex lg:hidden justify-center space-x-4 pb-2 mt-8 animate-fadeIn animation-delay-1200 order-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${link.color} hover:text-white`}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div> */}
      </div>

    
    </section>
  );
};

export default Hero;
