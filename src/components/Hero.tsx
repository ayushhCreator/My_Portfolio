import React from 'react';
import { ChevronDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-600"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-300"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <div className="animate-slideInLeft">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">
                <span className="inline-block">Hello, I'm</span>
                <br />
                <span className="animate-gradientText bg-gradient-to-r from-indigo-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                  Ayush Raj
                </span>
              </h1>
            </div>
            
            <div className="animate-slideInLeft animation-delay-300">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
                Full-Stack Software Engineer
              </h2>
            </div>
            
            <div className="animate-slideInLeft animation-delay-600">
              <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed">
                Building scalable web applications with <span className="text-indigo-600 font-semibold">MERN stack</span> and <span className="text-cyan-600 font-semibold">Spring Boot</span>. 
                Experienced in creating real-time collaborative platforms and optimizing system performance.
              </p>
            </div>
            
            <div className="animate-slideInLeft animation-delay-900 flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulseGlow"
              >
                <span className="relative z-10">Contact Me</span>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-full hover:bg-gray-50 transition-all duration-300 border-2 border-indigo-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
          <div className="flex-1 flex justify-center lg:justify-end animate-slideInRight animation-delay-600">
            <div className="relative">
              {/* Animated Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full animate-pulseGlow"></div>
              
              {/* Profile Image */}
              <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl animate-float">
                <img 
                  src="/assets/me.png" 
                  alt="Ayush Raj - Full-Stack Software Engineer" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full animate-bounce animation-delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-bounce animation-delay-600"></div>
            </div>
          </div>
        </div>

        {/* Social Links for Mobile */}
        <div className="flex lg:hidden justify-center space-x-4 mt-8 animate-fadeIn animation-delay-1200">
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
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded-full bg-white shadow-lg hover:shadow-xl">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
