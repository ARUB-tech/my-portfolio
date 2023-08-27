import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abdur-rub-9bb2521a6/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/ARUB-tech" target="_blank" rel="noreferrer"><FaGithub /></a>
              
    </div>
  )
}

export default HeaderSocials