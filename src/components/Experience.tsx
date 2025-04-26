import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Dot Plus Technologies Pvt. Ltd",
      location: "Bihar, India",
      period: "April 2023 – September 2023",
      responsibilities: [
        "Developed web applications using HTML5, CSS3, JavaScript, and Bootstrap.",
        "Contributed to frontend-backend integration for Saadwul e-commerce platform.",
        "Built reusable code modules for RPS Law College website.",
        "Used Git for version control and participated in code reviews.",
        "Applied performance optimization techniques to improve responsiveness."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Work Experience</h2>
        <div className="w-20 h-1 bg-teal-600 mx-auto mb-12"></div>
        
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              <div className="bg-white rounded-lg shadow-lg p-6 ml-10 relative">
                <div className="absolute -left-10 top-6 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                <div className="flex flex-wrap items-center text-gray-600 mb-4">
                  <span className="mr-6 font-medium">{exp.company}</span>
                  <span className="mr-6">{exp.location}</span>
                  <div className="flex items-center mt-1 sm:mt-0">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
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