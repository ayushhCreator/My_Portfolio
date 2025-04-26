import React from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-12"></div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              Software Developer with practical experience in full-stack web development and a strong educational foundation in computer applications. 
              Proficient in Java with hands-on project implementation. Demonstrated ability to translate requirements into functional applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <User className="text-teal-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Name</h3>
                  <p className="text-gray-700">Ayush Raj</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <Phone className="text-teal-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-700">+91 7464026177 ,+91 8073342967</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <Mail className="text-teal-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-700">araj09510@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-full mr-4">
                  <MapPin className="text-teal-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Location</h3>
                  <p className="text-gray-700">Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;