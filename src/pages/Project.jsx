import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ott from "../assets/ott.png"
import codingninjas from "../assets/ninjas.png"
import game from "../assets/quiz.png"

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  const projects = [
    {
      image: ott, 
      name: "OTT Platform UI", 
      desc: "A Netflix-inspired UI clone with responsive design, movie posters, and modern interface. Pure frontend implementation with React.",
      tech: ["React", "CSS3", "HTML5", "Responsive Design"],
      githubLink: "https://github.com/Nitinkanti/OTT-Platform",
      liveLink: "https://nitinkanti.github.io/Education-Platform/",
      status: "completed"
    },
    {
      image: codingninjas, 
      name: "Coding Ninjas Clone", 
      desc: "E-learning platform clone currently under development. Implementing course pages and user interface components.",
      tech: ["React", "JavaScript", "CSS3", "Under Development"],
      githubLink: "https://github.com/Nitinkanti/Education-Platform",
      liveLink: "#",
      status: "ongoing"
    },
    {
      image: game, 
      name: "Quiz Game", 
      desc: "Interactive quiz application with multiple categories, score tracking, and timer functionality. Test your knowledge!",
      tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      githubLink: "https://github.com/Nitinkanti/QuizGame",
      liveLink: "https://nitinkanti.github.io/QuizGame/",
      status: "completed"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={projectsRef}
      id='projects' 
      className='relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-20 overflow-hidden'
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
      
      {/* Section Header */}
      <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          My <span className="text-yellow-500">Projects</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent works that showcase my skills and passion for development
        </p>
      </div>

      {/* Projects Grid */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Status Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                project.status === 'ongoing' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-green-500 text-white'
              }`}>
                {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
              </div>
              
              {/* Project Links */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-900 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>
                {project.liveLink !== '#' && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                {project.name}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-yellow-500 bg-opacity-20 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500 border-opacity-30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 text-sm font-medium group/btn"
                >
                  <FaGithub className="group-hover/btn:scale-110 transition-transform" />
                  Code
                </a>
                {project.liveLink !== '#' ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg transition-all duration-300 text-sm font-medium group/btn"
                  >
                    <FaExternalLinkAlt className="group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium"
                  >
                    <FaExternalLinkAlt />
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Projects */}
      <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-gray-400 mb-6">
          Interested in seeing more of my work?
        </p>
        <a
          href="https://github.com/Nitinkanti"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-xl transition-all duration-300 font-semibold"
        >
          <FaGithub />
          View GitHub
        </a>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Projects