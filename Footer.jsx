import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Portfolio</a>

      <ul className="permalinks">
        <li><a href="#home" rel="noreferrer">Home</a></li>
        <li><a href="#about" rel="noreferrer">About</a></li>
        <li><a href="#experience" rel="noreferrer">Skills</a></li>
        <li><a href="#services" rel="noreferrer">Technical Skills</a></li>
        <li><a href="#portfolio" rel="noreferrer">Project</a></li>
        <li><a href="#testimonial" rel="noreferrer">Training and Certificate</a></li>
        <li><a href="#contact" rel="noreferrer">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohd-samiullah-587790207/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/MOHDSAMIULLAH" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer