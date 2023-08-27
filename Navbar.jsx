import './navbar.css'
import {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa" 

const Navbar = () => {

    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);
    const [activeNav, setActiveNav] = useState('#');
    const [color, setColor] = useState(false);
    const changeColor = () => {
      if (window.scrollY >= 100){
        setColor(true);
      }else{
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="container__navbar">
        <div className="logo">
          <a>Portfolio</a>
        </div>
        <div className="nav-elements">
            
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="#home" rel="noreferrer" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>Home</a></li>
                <li><a href="#about" rel="noreferrer" onClick={() => setActiveNav('#about')} className= {activeNav ==='#about' ? 'active' : ''}>About</a></li>
                <li><a href="#skills" rel="noreferrer" onClick={() => setActiveNav('#skills')} className= {activeNav ==='#skills' ? 'active' : ''}>Skills</a></li>
                <li><a href="#project" rel="noreferrer" onClick={() => setActiveNav('#project')} className= {activeNav ==='#project' ? 'active' : ''}>Project</a></li>
                <li><a href="#contact" rel="noreferrer" onClick={() => setActiveNav('#contact')} className= {activeNav ==='#contact' ? 'active' : ''}>Contact</a></li>
          </ul>
          <div className="hamburger" onClick={handleClick} size={20}>
            {click ?(
              <FaTimes />
              ) :(
                <FaBars />
                )}
            </div>
            

        </div>
      </div>
    </div>
  )
}

export default Navbar