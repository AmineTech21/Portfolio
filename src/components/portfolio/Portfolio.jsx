import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/mern-e-commerce.jpg'
import IMG2 from '../../assets/flashburger.jpg'
import IMG3 from '../../assets/okclotheshop.jpg'
import IMG4 from '../../assets/oumarauto.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'MERN e-commerce website (ReactJS | MongoDB | NodeJS | Express | Redux | Firebase | Stripe api integration | JWT auth )',
    github: 'https://github.com/AmineTech21/Mern-e-commerce',
    demo : 'https://amine-mern-e-commerce.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Flash Burger - Restaurant Food Ordering Website (ReactJS)',
    github: 'https://github.com/AmineTech21/Flash-Burger',
    demo : 'https://flashburger.ca'
  },
  {
    id: 3,
    image: IMG3,
    title: 'OkClotheShop E-Commerce Website ( WordPress | WooCommerce | RankMath SEO | Custom PHP/Javascript/HTML/CSS | Speed Optimization )',
    // github: 'https://github.com',
    demo : 'https://okclotheshop.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'OumarAuto Car Listing Website ( WordPress | RankMath SEO | Custom PHP/Javascript/HTML/CSS | Speed Optimization)',
    // github: 'https://github.com',
    demo : 'https://okclotheshop.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map ( ( {id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <a href={demo} target='_blank'><img src={image} alt={title} /></a>
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              { id == 3 || id == 4 ? '' : <a href={github} className='btn' target='_blank'>Github</a>}
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio