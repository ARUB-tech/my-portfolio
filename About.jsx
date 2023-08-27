import React from 'react'
import './about.css'
import ME from '../../assets/arub.jpeg'

const About = () => {
  return (
    <section id="about">
      {/* <h5>Get To Know</h5> */}
      <h2>About</h2>
      <div className="container about__container">
        <div className="about__content">
            <p>
            I am seeking a career that is challenging and interesting, and lets me work on the leading areas of technology, a job that gives me opportunities to learn, innovate, and enhance my skills and strengths in conjunction with the company's goals and objectives.
            </p>
            
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>

        <div className="about__me">  
          <div className="arub.jpeg">
              <img src={ME} alt="About Images" />
          </div>
        </div>
        
      </div>
      </section>
  )
}

export default About