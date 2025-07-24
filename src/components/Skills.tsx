import React from 'react';
import { Code, Database, Globe, Terminal, Server, PenTool as Tool } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Globe size={24} />,
      skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Thymeleaf"]
    },
    {
      title: "Backend Technologies",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express.js", "Spring Boot", "Java", "PHP", ".NET Framework"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "MongoDB", "SQL Server"]
    },
    {
      title: "Development Tools",
      icon: <Tool size={24} />,
      skills: ["Git", "GitHub", "Maven", "NPM", "Postman", "IntelliJ IDEA", "Visual Studio", "VS Code"]
    },
    {
      title: "Core Concepts",
      icon: <Code size={24} />,
      skills: ["RESTful APIs", "Microservices", "OOP", "JWT", "Responsive Design"]
    },
    {
      title: "Methodologies",
      icon: <Terminal size={24} />,
      skills: ["Agile/Scrum", "Git Workflows", "Code Reviews", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover-lift animate-scaleIn group border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 p-3 rounded-full mr-4 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm" 
                          style={{ 
                            width: `${Math.floor(Math.random() * 30) + 70}%`,
                            animationDelay: `${(index * 100) + (skillIndex * 100)}ms`
                          }}
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