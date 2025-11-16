import React, { useState, useEffect, useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si'

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    { 
      name: "HTML", 
      icon: <FaHtml5 className="text-6xl text-orange-500" />, 
      level: 90,
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "CSS", 
      icon: <FaCss3Alt className="text-6xl text-blue-500" />, 
      level: 85,
      color: "from-blue-500 to-blue-700"
    },
    { 
      name: "JavaScript", 
      icon: <FaJs className="text-6xl text-yellow-400" />, 
      level: 80,
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      name: "React", 
      icon: <FaReact className="text-6xl text-cyan-400" />, 
      level: 75,
      color: "from-cyan-400 to-blue-500"
    },
    { 
      name: "Node.js", 
      icon: <FaNodeJs className="text-6xl text-green-500" />, 
      level: 70,
      color: "from-green-500 to-green-700"
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb className="text-6xl text-green-700" />, 
      level: 65,
      color: "from-green-700 to-green-900"
    },
    { 
      name: "Express", 
      icon: <SiExpress className="text-6xl text-gray-300" />, 
      level: 70,
      color: "from-gray-400 to-gray-600"
    },
    { 
      name: "Tailwind", 
      icon: <SiTailwindcss className="text-6xl text-teal-400" />, 
      level: 85,
      color: "from-teal-400 to-cyan-500"
    }
  ]

  return (
    <section 
      ref={skillsRef}
      id='skills' 
      className='relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center py-20 px-6 overflow-hidden'
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      
      {/* Section Header */}
      <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          My <span className="text-yellow-500">Skills</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Skills Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group relative bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Skill Icon */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                {skill.icon}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>
            </div>
            
            {/* Skill Name */}
            <h3 className="text-center text-lg font-semibold text-white mb-3">
              {skill.name}
            </h3>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div 
                className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100 + 500}ms`
                }}
              ></div>
            </div>
            
            {/* Skill Percentage */}
            <div className="flex justify-between items-center text-sm text-gray-300">
              <span>Proficiency</span>
              <span className="font-bold text-yellow-500">{skill.level}%</span>
            </div>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Continuously learning and adapting to new technologies to stay at the forefront of web development.
        </p>
      </div>

      {/* CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
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

export default Skills