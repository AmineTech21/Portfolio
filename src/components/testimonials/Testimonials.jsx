import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/oumar.jpg'
import AVTR2 from '../../assets/imad.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Oumar Kamia",
    review: "I have asked Amine to make me an e-commerce website and a car listing website and he made me two websites that just went way further than my excpectation, working with him was really good, professional, serious, he handled everything for me surely gonna work with him again !"
  },
  {
    avatar: AVTR2,
    name: "imad eddine bourouche",
    review: "I worked with Mohamed amine on the backend part of the GDG ressources platform in the integration program of GDG Algiers. He showed a Great soft and hard skills, a serious person, and a fast learner without mentioning the great team working skills. Just an amazing teammate!!"
  },
  // {
  //   avatar: AVTR1,
  //   name: "Oumar Kamia",
  //   review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas possimus autem inventore, magni saepe voluptatem? Mollitia repellendus dolorem, quo ex optio nam! Libero animi aliquid fuga ipsum ad dolorem sunt."
  // },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials