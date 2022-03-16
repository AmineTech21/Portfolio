import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>WordPress CMS</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>WooCommerce</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Rank Math SEO</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Custom Development</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>PHP</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Javascript</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>HTML</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>CSS</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Speed Optimization</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>ReactJS</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Redux</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Javascript</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>jQuery</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Tailwind CSS</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Bootstrap</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>CSS</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>HTML</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>On-Page SEO</p>
            </li>
          </ul>
        </article>
        {/* END OF Web development */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>NodeJS</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>MongoDB / Express</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Laravel</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>PHP</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>MySql</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Firebase</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Clean Code/Solid Principles/MVC Model/OOP</p>
            </li>
          </ul>
        </article>
        {/* END OF Content creation */}
      </div>
    </section>
  )
}

export default Services