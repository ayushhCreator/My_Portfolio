import React from 'react';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      institution: "New Horizon College of Engineering",
      location: "Bengaluru",
      period: "September 2023 – September 2025",
      details: "Current CGPA: 7.75/10",
      courses: "Relevant Courses: Advanced Programming, Software Engineering, DBMS, Data Structures and Algorithms"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Lalit Narayan Mishra Institute Of Economic Development And Social Change",
      location: "Patna, Bihar",
      period: "June 2020 – June 2023",
      details: "CGPA: 8.27/10",
      courses: ""
    },
    {
      degree: "Intermediate (Class 12)",
      institution: "College of Commerce, Arts and Science",
      location: "Patna",
      period: "March 2020",
      details: "Percentage: 72.2%",
      courses: ""
    },
    {
      degree: "Matriculation (Class 10)",
      institution: "Rosemary Land School",
      location: "Bihar Sharif",
      period: "June 2018",
      details: "Percentage: 78.4%",
      courses: ""
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Education</h2>
        <div className="w-20 h-1 bg-teal-600 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="absolute left-0 sm:left-0 h-full w-2 bg-teal-600 group-hover:w-3 transition-all duration-300 ease-in-out"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-8 sm:pl-32 mb-10 last:mb-0">
                  <div className="absolute left-0 -ml-[9px] sm:-ml-[41px] top-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white border-4 border-teal-600"></div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                    <h4 className="text-lg text-gray-700 mb-2">{edu.institution}</h4>
                    
                    <div className="flex flex-wrap items-center text-gray-600 mb-3">
                      <div className="flex items-center mr-6 mb-1 sm:mb-0">
                        <MapPin size={16} className="mr-1" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 font-medium">{edu.details}</p>
                    {edu.courses && (
                      <p className="text-gray-700 mt-2">{edu.courses}</p>
                    )}
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