import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/logo.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>AmineTech</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />

        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header