import React, { useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "WorkNest - Real-time Kanban Project Management Tool",
      date: "July 2025",
      description: "A comprehensive full-stack project management application built with the MERN stack, featuring real-time collaboration, Kanban boards, team management capabilities, and enterprise-level features for modern teams.",
      details: [
        "Architected a real-time project management application using MERN stack with Socket.io for instant collaboration",
        "Implemented JWT authentication and role-based access control for secure project management",
        "Constructed analytics dashboard with Chart.js and real-time notifications with file upload functionality",
        "Built drag-and-drop Kanban boards with React Beautiful DnD for intuitive task management",
        "Created comprehensive role-based permission system (Owner/Admin/Member/Viewer) with granular access control",
        "Integrated email invitation system with secure token-based authentication",
        "Designed responsive UI with Tailwind CSS ensuring mobile-friendly interface",
        "Integrated MongoDB with Mongoose ODM for efficient data management and complex queries"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS", "JWT", "Cloudinary", "Chart.js"],
      link: "https://github.com/ayushhCreator/WorkNest"
    },
    {
      title: "Food Waste Management System",
      date: "January 2025",
      description: "A platform connecting hotels and restaurants with communities to reduce food waste, featuring role-based authentication and responsive design.",
      details: [
        "Built a platform connecting hotels and restaurants with communities to reduce food waste",
        "Implemented role-based authentication for donors, administrators, and delivery personnel",
        "Designed responsive interface achieving 95% user satisfaction in feedback sessions",
        "Created efficient database schema for managing food donations and distribution",
        "Integrated real-time notifications for food availability and pickup scheduling",
        "Implemented geolocation features for efficient food distribution routing"
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
      link: "https://github.com/ayushhCreator/food-waste-management-system"
    },
    {
      title: "HRMS-Integrated Timetable Management System",
      date: "November 2024",
      description: "Advanced academic scheduling system integrating complex timetable management with human resource management functions.",
      details: [
        "Built backend in Java Spring Boot, integrating complex academic scheduling logic.",
        "Created RESTful APIs and database models using MySQL.",
        "Designed scalable architecture using Object-Oriented Design."
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "RESTful APIs"],
      link: "https://github.com/ayushhCreator/HRMS-MU"
    },
    {
      title: "Budget Hotels in Delhi (Online Hotel Reservation System)",
      date: "April 2023",
      description: "Comprehensive hotel booking platform for budget accommodations in Delhi, featuring reservation management and user accounts.",
      details: [
        "Created hotel booking system using ASP.NET MVC and C#.",
        "Integrated MySQL database for hotel data and booking tracking.",
        "Implemented secure login and role-based access control."
      ],
      technologies: ["ASP.NET MVC", "C#", "MySQL", "Bootstrap", "JavaScript"],
      link: "https://github.com/ayushhCreator/Budget_Hottels_in_Delhi"
    }
  ];

  const toggleProject = (index: number) => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift animate-scaleIn ${
                activeProject === index ? 'ring-2 ring-indigo-500 shadow-2xl' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleProject(index)}
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 mr-4">{project.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={16} className="mr-1" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-800 text-sm rounded-full border border-indigo-200 hover:from-indigo-200 hover:to-cyan-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors focus:outline-none group"
                >
                  {activeProject === index ? 'Show Less' : 'Show More'}
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {activeProject === index ? '↑' : '→'}
                  </span>
                </button>
              </div>
              
              {activeProject === index && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Project Details:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link 
                    <ExternalLink size={16} className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;