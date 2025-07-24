import React from 'react';
import { User, MapPin, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const About: React.FC = () => {
  const socialLinks = [
    { 
      icon: <Github size={18} />, 
      href: 'https://github.com/ayushhCreator',
      label: 'GitHub',
      color: 'hover:bg-gray-700 hover:text-white'
    },
    { 
      icon: <Linkedin size={18} />, 
      href: 'https://linkedin.com/in/ayush-raj-633526186',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    { 
      icon: <Twitter size={18} />, 
      href: 'https://twitter.com/ayushhcreator',
      label: 'Twitter',
      color: 'hover:bg-blue-400 hover:text-white'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-6"></div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 hover-lift animate-scaleIn animation-delay-300">
            <div className="animate-fadeIn animation-delay-600">
              <p className="text-gray-700 mb-8 leading-relaxed text-justify text-lg">
                Full-Stack Software Engineer with 8+ months of experience in building web applications using MERN stack and Spring
                Boot. Skilled in developing scalable systems, optimizing database performance, and working in Agile environments.
                Passionate about writing clean code and solving complex problems. Demonstrated expertise in creating real-time collaborative
                applications, implementing secure authentication systems, and building responsive user interfaces that serve hundreds of users.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-fadeIn animation-delay-900">
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <User className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Name</h3>
                  <p className="text-gray-700">Ayush Raj</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">+91 7464026177, +91 8073342967</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">ayushraj1501003@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-700">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fadeIn animation-delay-1200">
              <p className="w-full text-gray-700 font-semibold mb-2">Connect with me:</p>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full transition-all duration-300 ${link.color} hover-lift`}
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
            
            <div className="animate-fadeIn animation-delay-1200">
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-pulseGlow"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;