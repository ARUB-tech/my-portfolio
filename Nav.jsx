import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" title='home' rel="noreferrer" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" title='about' rel="noreferrer" onClick={() => setActiveNav('#about')} className= {activeNav ==='#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" title='skills' rel="noreferrer" onClick={() => setActiveNav('#skills')} className= {activeNav ==='#skills' ? 'active' : ''}><BiBook /></a>
      <a href="#project" title='project' rel="noreferrer" onClick={() => setActiveNav('#project')} className= {activeNav ==='#project' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" title='contact' rel="noreferrer" onClick={() => setActiveNav('#contact')} className= {activeNav ==='#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
    
      


    
  )
}

export default Nav