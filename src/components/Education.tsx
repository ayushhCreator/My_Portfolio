import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "New Horizon College of Engineering",
      location: "Bengaluru, Karnataka",
      period: "Dec 2023 – Aug 2025",
      details: "CGPA: 7.75/10.0",
      courses: "Relevant Courses: Advanced Programming, Software Engineering, DBMS, Data Structures and Algorithms"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Lalit Narayan Mishra Institute",
      location: "Patna, Bihar",
      period: "Oct 2020 – Jul 2023",
      details: "CGPA: 8.27/10.0 — Top 15% of graduating class",
      courses: ""
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-3 md:left-6 h-full w-1 bg-gradient-to-b from-indigo-600 to-cyan-600 rounded-full"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-8 md:pl-16 animate-slideInRight" style={{ animationDelay: `${index * 300}ms` }}>
                  <div className="absolute left-0 md:left-3 -ml-[7px] md:-ml-[10px] top-2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-white border-2 md:border-4 border-indigo-600 shadow-lg animate-pulseGlow"></div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 transition-all hover:shadow-2xl hover-lift border border-gray-100">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-300 leading-tight">{edu.degree}</h3>
                    <h4 className="text-base md:text-lg lg:text-xl text-indigo-600 mb-4 font-semibold">{edu.institution}</h4>
                    
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center text-gray-600 mb-4 gap-2 sm:gap-4">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-cyan-600 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-indigo-600 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">{edu.period}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-3 md:p-4 rounded-lg border-l-4 border-indigo-500">
                      <p className="text-gray-800 font-semibold text-base md:text-lg">{edu.details}</p>
                      {edu.courses && (
                        <p className="text-gray-700 mt-2 italic text-sm md:text-base text-justify">{edu.courses}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;