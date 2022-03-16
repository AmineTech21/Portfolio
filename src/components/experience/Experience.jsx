import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill } from 'react-icons/bs'
import {AiFillHtml5 } from 'react-icons/ai'
import {DiCss3 } from 'react-icons/di'
import {FaBootstrap, FaReact, FaNodeJs, FaPhp, FaLaravel, FaGitSquare, FaWordpress } from 'react-icons/fa'
import {SiTailwindcss, SiJavascript, SiMongodb, SiMysql, SiJquery, SiPagespeedinsights, SiRedux, SiFirebase, SiExpress } from 'react-icons/si'
import {AiFillGithub, AiOutlineApi} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article><FaReact className='experience__icons' /></article>
            <article><SiRedux className='experience__icons' /></article>
            <article><SiTailwindcss className='experience__icons' /></article>
            <article><SiJavascript className='experience__icons' /></article>
            <article><SiJquery className='experience__icons' /></article>
            <article><AiFillHtml5 className='experience__icons' /></article>
            <article><FaBootstrap className='experience__icons' /></article>
            <article><DiCss3 className='experience__icons' /></article>    
            {/* <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>SASS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>

          {/* END OF FRONTEND */}
        
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article><FaNodeJs className='experience__icons' /></article>
            <article><SiFirebase className='experience__icons' /></article>
            <article><SiExpress className='experience__icons' /></article>
            <article><FaLaravel className='experience__icons' /></article>
            <article><SiMongodb className='experience__icons' /></article>
            <article><SiMysql className='experience__icons' /></article>
            <article><FaPhp className='experience__icons' /></article>
            <article><FaGitSquare className='experience__icons' /></article>
            {/* <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>Laravel</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'  />
              <div>
              <h4>API Development</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience