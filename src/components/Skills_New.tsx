import React, { useState } from 'react';
import { Code, Database, Globe, Terminal, Server, PenTool as Tool, Star, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const [displayStyle, setDisplayStyle] = useState<'cards' | 'badges' | 'circular'>('badges');
  
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

  // Flatten all skills for badge display
  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({
      ...skill,
      category: category.title
    }))
  );

  const getSkillBadgeSize = (level: number) => {
    if (level >= 90) return 'text-lg px-6 py-3';
    if (level >= 80) return 'text-base px-5 py-2.5';
    return 'text-sm px-4 py-2';
  };

  const getSkillBadgeColor = (level: number) => {
    if (level >= 90) return 'from-emerald-500 to-teal-500 shadow-emerald-200';
    if (level >= 80) return 'from-indigo-500 to-purple-500 shadow-indigo-200';
    return 'from-cyan-500 to-blue-500 shadow-cyan-200';
  };

  const renderBadgeStyle = () => (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 animate-fadeIn">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className={`
              ${getSkillBadgeSize(skill.level)}
              ${getSkillBadgeColor(skill.level)}
              bg-gradient-to-r text-white font-semibold rounded-full 
              shadow-lg hover:shadow-xl transition-all duration-300 
              hover:scale-110 cursor-pointer group relative overflow-hidden
              animate-scaleIn
            `}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="relative z-10 flex items-center gap-2">
              {skill.level >= 90 && <Star size={16} className="text-yellow-200" />}
              {skill.name}
              {skill.level >= 85 && skill.level < 90 && <Award size={14} className="text-yellow-200" />}
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCircularStyle = () => (
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
          
          {/* Style Selector */}
          <div className="flex justify-center mb-8 flex-wrap gap-2">
            <button
              onClick={() => setDisplayStyle('badges')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                displayStyle === 'badges'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Smart Badges
            </button>
            <button
              onClick={() => setDisplayStyle('circular')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                displayStyle === 'circular'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Circular Progress
            </button>
            <button
              onClick={() => setDisplayStyle('cards')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                displayStyle === 'cards'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Category Cards
            </button>
          </div>
        </div>
        
        {/* Render based on selected style */}
        {displayStyle === 'badges' && renderBadgeStyle()}
        {displayStyle === 'circular' && renderCircularStyle()}
        {displayStyle === 'cards' && (
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
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm" 
                            style={{ 
                              width: `${skill.level}%`,
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
        )}
      </div>
    </section>
  );
};

export default Skills;
