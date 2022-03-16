import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mohamed-amine-boukhari-70391921b/' target="_blank" className='header__socials-icon'><BsLinkedin/></a>
        <a href='https://github.com/AmineTech21' target="_blank" className='header__socials-icon'><FaGithub/></a>
        <a href='mailto:aminewebdeveloper@gmail.com' target="_blank" className='header__socials-icon'><MdOutlineEmail/></a>
        
    </div>
  )
}

export default HeaderSocial