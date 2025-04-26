import React from 'react';
import { Code, Database, Globe, Terminal, Server, PenTool as Tool } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Java", "Python", "JavaScript", "SQL"]
    },
    {
      title: "Web Development",
      icon: <Globe size={24} />,
      skills: ["HTML5", "CSS3", "Bootstrap", "Spring Boot", "ASP.NET MVC"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MySQL"]
    },
    {
      title: "Tools & Technologies",
      icon: <Tool size={24} />,
      skills: ["Git", "Visual Studio", "Eclipse", "Object-Oriented Programming"]
    },
    {
      title: "Development",
      icon: <Terminal size={24} />,
      skills: ["Requirements analysis", "Problem-solving", "Algorithm implementation", "Testing"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Spring Boot", "ASP.NET MVC", "RESTful APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">My Skills</h2>
        <div className="w-20 h-1 bg-teal-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-3 rounded-full mr-4 text-teal-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{skill}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-teal-600 h-2 rounded-full" 
                          style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;