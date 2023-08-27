//rafce
import React from 'react'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Summary from './components/summary/Summary'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Education from './components/education/Education' 
import Training from './components/training/Training'

const App = () => {
  return (
    <>
        <Navbar />
        <Home />
        <Nav />
        <About />
        <Education />
        <Skills />  
        <Summary />
        <Project />
        <Training />
        <Contact />
        <Footer />
    </>
  )
}

export default App