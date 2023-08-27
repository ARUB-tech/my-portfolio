import React from 'react'
import background from '../../assets/background.jpg'
import CTA from './CTA'
import './home.css'
import './header.css'
import HeaderSocial from './HeaderSocials'
import '../footer/footer.css'
// import {BsLinkedin} from 'react-icons/bs'
// import {FaGithub} from 'react-icons/fa'

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className="mask">
            <img src={background} alt="" className="intro" />
        </div>
        <div className="content">
            <h5>Hello I'm</h5>
            <h1><span className='name'>Abdur </span> <span className='name'> Rub </span></h1>
            <h5 >Fullstack Web Developer</h5>
            <CTA />
        <div className="footer__socials">
        {/* <a href="https://www.linkedin.com/in/abdur-rub-9bb2521a6/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/ARUB-tech" target="_blank" rel="noreferrer"><FaGithub /></a> */}
      </div>
        </div>
        <HeaderSocial />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  )
}

export default Home