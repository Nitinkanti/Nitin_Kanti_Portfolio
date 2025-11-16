import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <div className='pt-16'>
        <section id='home'><Home /></section>
        <section id='skills'><Skills /></section>
        <section id='projects'><Project /></section>
        <section id='contact'><Contact /></section>
      </div>
      
    </>
  )
}

export default App
