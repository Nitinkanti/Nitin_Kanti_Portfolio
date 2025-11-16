import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaPaperPlane, FaCode } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { motion } from 'framer-motion';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      ref={contactRef}
      id='contact'
      className='relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center px-6 md:px-20 overflow-hidden'
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500 rounded-full filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-500 rounded-full filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500 rounded-full filter blur-xl opacity-15 animate-pulse"></div>
      
      {isVisible && (
        <motion.div
          className="w-full max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className='text-4xl md:text-6xl font-bold mb-4 text-center'
          >
            Let's <span className='text-yellow-500'>Connect</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className='text-lg md:text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto'
          >
            Got a project in mind? Let's discuss how we can bring your ideas to life.
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div 
            variants={itemVariants}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'
          >
            <div className='bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:-translate-y-2'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='p-3 bg-yellow-500 bg-opacity-20 rounded-full'>
                  <HiOutlineMail size={24} className='text-yellow-500' />
                </div>
                <h3 className='text-xl font-semibold'>Email</h3>
              </div>
              <a 
                href='mailto:nitinkanti333@gmail.com' 
                className='text-lg text-gray-300 hover:text-yellow-500 transition-colors'
              >
                nitinkanti333@gmail.com
              </a>
              <p className='text-sm text-gray-400 mt-2'>I'll respond within 24 hours</p>
            </div>
            
            <div className='bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:-translate-y-2'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='p-3 bg-yellow-500 bg-opacity-20 rounded-full'>
                  <HiOutlinePhone size={24} className='text-yellow-500' />
                </div>
                <h3 className='text-xl font-semibold'>Phone</h3>
              </div>
              <a 
                href='tel:+919289347395' 
                className='text-lg text-gray-300 hover:text-yellow-500 transition-colors'
              >
                +91 9289347395
              </a>
              <p className='text-sm text-gray-400 mt-2'>Available Mon-Fri, 9AM-6PM</p>
            </div>
          </motion.div>

          {/* Social Links - LeetCode Added */}
          <motion.div 
            variants={itemVariants}
            className='flex flex-col items-center mb-12'
          >
            <h3 className='text-xl font-semibold mb-6'>Find me on</h3>
            <div className='flex gap-6'>
              <motion.a
                href='https://github.com/Nitinkanti'
                target='_blank'
                rel='noopener noreferrer'
                className='p-4 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-full border border-gray-700 hover:border-yellow-500 hover:bg-yellow-500 hover:bg-opacity-10 transition-all duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title='GitHub Profile'
              >
                <FaGithub size={28} />
              </motion.a>
              
              <motion.a
                href='https://www.linkedin.com/in/nitin-kanti-662792295/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-4 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-full border border-gray-700 hover:border-yellow-500 hover:bg-yellow-500 hover:bg-opacity-10 transition-all duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title='LinkedIn Profile'
              >
                <FaLinkedin size={28} />
              </motion.a>
              
              <motion.a
                href='https://leetcode.com/u/Nitin_kanti/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-4 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-full border border-gray-700 hover:border-yellow-500 hover:bg-yellow-500 hover:bg-opacity-10 transition-all duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title='LeetCode Profile'
              >
                <FaCode size={28} />
              </motion.a>
              
              <motion.a
                href='mailto:nitinkanti333@gmail.com'
                className='p-4 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-full border border-gray-700 hover:border-yellow-500 hover:bg-yellow-500 hover:bg-opacity-10 transition-all duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title='Send Email'
              >
                <FaPaperPlane size={28} />
              </motion.a>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className='text-center'
          >
            <p className='text-gray-300 max-w-xl mx-auto mb-6'>
              Ready to start a project together? Let's create something amazing.
            </p>
            <motion.button
              className='px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full flex items-center gap-2 mx-auto hover:bg-yellow-400 transition-colors'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:nitinkanti333@gmail.com'}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Contact;