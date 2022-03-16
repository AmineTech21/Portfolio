import React from 'react'
import './about.css'
import ME from '../../assets/logo.png'
import {FaUserTie} from 'react-icons/fa'
import {BiCodeAlt} from 'react-icons/bi'
import {HiOutlineLightBulb} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUserTie className='about__icons' />
              <h5 className='about__title'>Professional</h5>
              {/* <small>3+ Years Working</small> */}
            </article>

            <article className='about__card'>
              <BiCodeAlt className='about__icons' />
              <h5 className='about__title'>Clean Code</h5>
              {/* <small>200+ Worldwide</small> */}
            </article>

            <article className='about__card'>
              <HiOutlineLightBulb className='about__icons' />
              <h5 className='about__title'>Creative</h5>
              {/* <small>80+</small> */}
            </article>
          </div>
            <p>
            I’m a full stack web developer and a member of the google community of Algeria "GDG Algiers", and I have a passion to solve problems
            and love to work on new projects and revolutionary ideas . <br/> <br/>

            I like to make the dreams of peoples reality ! If you have any project you want to realise or if you have any need don't hesitate to contact me I would be more than happy to help you .

            </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About