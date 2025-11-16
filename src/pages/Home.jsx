import React, { useState, useEffect, useRef } from 'react';
import { FaDownload, FaArrowDown } from 'react-icons/fa';

function Home() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [showElements, setShowElements] = useState(false);
  const homeRef = useRef(null);

  // ✅ CV download code - SAHI NAAM
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/nitinCV.pdf';
    link.download = 'Nitin_Kanti_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const roles = ['MERN Stack Developer', 'Frontend Developer', 'Full Stack Developer', 'React Developer'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowElements(true);
        }
      },
      { threshold: 0.3 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (currentIndex < roles[currentRoleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + roles[currentRoleIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentRoleIndex]);

  return (
    <section
      ref={homeRef}
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-20 overflow-hidden pt-0"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-60 sm:h-60 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500 rounded-full filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-52 sm:h-52 bg-green-500 rounded-full filter blur-3xl opacity-5 animate-pulse delay-500"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-500 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center w-full max-w-4xl mx-auto transition-all duration-1000 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Welcome Text */}
        <div className="mb-4 sm:mb-6">
          <span className="text-yellow-500 text-sm sm:text-base font-semibold tracking-wider">
            👋 WELCOME TO MY PORTFOLIO
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-4 sm:mb-6">
          <span className="block text-gray-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Hey, I'm</span>
          <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
            Nitin Kanti
          </span>
        </h1>

        {/* Typing Text */}
        <div className="h-14 sm:h-16 mb-6 sm:mb-8 flex justify-center items-center">
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300">
            I'm a{' '}
            <span className="text-yellow-500 relative">
              {currentText}
              <span className="absolute -right-1 top-0 w-0.5 h-full bg-yellow-500 animate-pulse"></span>
            </span>
          </span>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto space-y-3 mb-8 sm:mb-12 px-2">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
            Crafting <span className="text-yellow-500">digital experiences</span> that blend 
            beautiful design with cutting-edge technology
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Specialized in building scalable web applications with modern JavaScript frameworks
          </p>
        </div>

        {/* Buttons - ✅ SAHI FUNCTION CALL */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-700 delay-500 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#projects"
            className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-500/20 flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center max-w-xs mx-auto"
          >
            <span>View My Work</span>
            <FaArrowDown className="group-hover:animate-bounce transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="group px-5 sm:px-6 py-2.5 sm:py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-500/10 flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center max-w-xs mx-auto"
          >
            <span>Let's Talk</span>
          </a>

          {/* ✅ YEH BUTTON SAHI HAI */}
          <button 
            onClick={downloadCV}  // ✅ 'downloadCV' function call
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-500/10 text-sm sm:text-base w-full sm:w-auto justify-center max-w-xs mx-auto"
          >
            <FaDownload />
            Download CV
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${showElements ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-1">
          <span className="text-gray-400 text-xs tracking-wider">SCROLL DOWN</span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 border border-yellow-500 rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 sm:h-2 bg-yellow-500 rounded-full mt-1 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
          }
          50% { 
            transform: translateY(-8px) translateX(4px); 
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Home;