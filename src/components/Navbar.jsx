import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const sections = ['Home', 'Skills', 'Projects', 'Contact']

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full h-16 z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 shadow-xl' : 'bg-gradient-to-r from-slate-900 via-gray-700 to-yellow-700 '
    }`}>
      {/* Logo - Left Side */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
        <h1 className="text-2xl font-bold text-white">
          <span className="text-yellow-500">{`{`}</span>Nitin Kanti<span className="text-yellow-500">{`}`}</span>
        </h1>
      </div>

      {/* Desktop Menu - Right Side */}
      <ul className="hidden md:flex items-center gap-4">
        {sections.map((section) => (
          <li key={section}>
            <Link
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={-64}
              onSetActive={setActiveSection}
              className={`cursor-pointer px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                activeSection === section.toLowerCase() 
                  ? 'bg-gray-500 text-black shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  )
}

export default Navbar