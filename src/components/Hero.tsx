import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-100 to-gray-200 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-fadeIn">
              <span className="inline-block">Hello, I'm</span>
              <span className="block text-teal-600 mt-2">Ayush Raj</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-6 animate-fadeIn animation-delay-300">
              Web Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg animate-fadeIn animation-delay-600">
              I build exceptional and accessible digital experiences for the web.
              Specialized in full-stack development with expertise in Java, Spring Boot, and web technologies.
            </p>
            <div className="flex flex-wrap gap-4 mb-4 animate-fadeIn animation-delay-900">
              <a
                href="#contact"
                className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-teal-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 border border-teal-600 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fadeIn animation-delay-600">
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 opacity-90"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src="assets/newpic.jpeg" // <-- your image path here
        alt="Ayush Raj"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;