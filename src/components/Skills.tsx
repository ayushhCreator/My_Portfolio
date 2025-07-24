import React from 'react';
import { Code, Database, Globe, Terminal, Server, PenTool as Tool } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Globe size={24} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Thymeleaf", level: 70 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Spring Boot", level: 90 },
        { name: "Java", level: 85 },
        { name: "PHP", level: 75 },
        { name: ".NET Framework", level: 70 }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "SQL Server", level: 80 }
      ]
    },
    {
      title: "Development Tools",
      icon: <Tool size={24} />,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "Maven", level: 80 },
        { name: "NPM", level: 85 },
        { name: "Postman", level: 85 },
        { name: "IntelliJ IDEA", level: 80 },
        { name: "Visual Studio", level: 75 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      title: "Core Concepts",
      icon: <Code size={24} />,
      skills: [
        { name: "RESTful APIs", level: 90 },
        { name: "Microservices", level: 75 },
        { name: "OOP", level: 85 },
        { name: "JWT", level: 80 },
        { name: "Responsive Design", level: 95 }
      ]
    },
    {
      title: "Methodologies",
      icon: <Terminal size={24} />,
      skills: [
        { name: "Agile/Scrum", level: 85 },
        { name: "Git Workflows", level: 90 },
        { name: "Code Reviews", level: 80 },
        { name: "Performance Optimization", level: 75 }
      ]
    }
  ];

  // Flatten all skills for circular display
  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({
      ...skill,
      category: category.title
    }))
  );

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
        
        {/* Circular Progress Display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {allSkills.map((skill, index) => {
            const circumference = 2 * Math.PI * 45;
            const strokeDasharray = circumference;
            const strokeDashoffset = circumference - (skill.level / 100) * circumference;
            
            return (
              <div
                key={index}
                className="flex flex-col items-center group animate-scaleIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-24 h-24 mb-3">
                  <svg className="transform -rotate-90 w-24 h-24">
                    <circle
                      cx="48"
                      cy="48"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className="text-indigo-600 transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">{skill.level}%</span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-gray-800 text-center group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
