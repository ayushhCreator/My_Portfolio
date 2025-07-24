import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer Intern - Full-Stack Java Developer",
      company: "Tripillar Solutions LLP",
      location: "Bengaluru, India",
      period: "October 2024 – December 2024",
      responsibilities: [
        "Engineered an HRMS web application for automated employee scheduling across 15 departments, reducing manual processing time by 8 hours weekly",
        "Built a timetable management system with CRUD operations for schedules, subjects, and faculty assignments using Spring Boot and Spring Data JPA",
        "Optimized database performance, reducing API response time by 62% through indexing and query improvements",
        "Designed 12 secure RESTful APIs with 99.1% uptime, handling 50+ concurrent users",
        "Implemented responsive frontend views using Thymeleaf, HTML, CSS, and Bootstrap following MVC architecture",
        "Participated in Agile development processes and mentored junior developers on Git workflows"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Dot Plus Technologies Pvt. Ltd",
      location: "Bihar, India",
      period: "April 2023 – September 2023",
      responsibilities: [
        "Built 5+ responsive web applications serving 800+ monthly users, including saadwul.com and rpslawcollege.com",
        "Increased mobile user engagement by 34% through a mobile-first design approach",
        "Implemented Git workflows and code review processes, reducing merge conflicts by 43%",
        "Crafted optimized HTML email templates with cross-browser compatibility",
        "Applied performance optimization techniques to improve website responsiveness"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative animate-slideInLeft" style={{ animationDelay: `${index * 300}ms` }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-6 md:p-8 ml-6 md:ml-10 relative hover-lift transition-all duration-500 border border-gray-100">
                <div className="absolute -left-6 md:-left-10 top-6 md:top-8 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg animate-pulseGlow">
                  <Briefcase size={16} className="text-white md:w-[18px] md:h-[18px]" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300 leading-tight">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center text-gray-600 mb-6 gap-2 sm:gap-4">
                  <div className="flex items-center">
                    <span className="font-semibold text-indigo-600">{exp.company}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1 flex-shrink-0" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1 flex-shrink-0" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="list-none pl-0 space-y-3 text-gray-700">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="leading-relaxed text-justify">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;