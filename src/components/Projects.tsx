import React, { useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "WorkNest - Real-time Kanban Project Management Tool",
      date: "July 2024",
      description: "Comprehensive full-stack project management application built with the MERN stack, featuring real-time collaboration, Kanban boards, team management capabilities, and enterprise-level features for modern teams.",
      details: [
        "Built full-stack application using MERN stack (MongoDB, Express.js, React, Node.js)",
        "Implemented real-time collaboration with Socket.io for instant updates",
        "Created drag-and-drop Kanban boards with React Beautiful DnD",
        "Developed JWT-based authentication with bcrypt password hashing",
        "Integrated role-based permissions system (Owner/Admin/Member/Viewer)",
        "Built email invitation system with secure tokens using Nodemailer",
        "Implemented file upload functionality with Cloudinary integration",
        "Created analytics dashboard with Chart.js for project insights"
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express.js", "Socket.io", "Tailwind CSS", "JWT", "Cloudinary"],
      link: "https://github.com/ayushhCreator/WorkNest"
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
      technologies: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "OOD"],
      link: "#"
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
      link: "#"
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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Projects</h2>
        <div className="w-20 h-1 bg-teal-600 mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                activeProject === index ? 'ring-2 ring-teal-500' : ''
              }`}
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
                      className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="text-teal-600 font-medium hover:text-teal-800 transition-colors focus:outline-none"
                >
                  {activeProject === index ? 'Show Less' : 'Show More'}
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
                    className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Link <ExternalLink size={16} className="ml-1" />
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