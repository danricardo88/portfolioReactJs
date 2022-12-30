import React from 'react';
import './testimonials.css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AVTR1 from '../../assets/avatar1.jpeg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import 'swiper/swiper.min.css';

const data = [
  {
    avatar: AVTR1,
    name: 'João Paulo Aramuni',
    linkedIn: 'https://www.linkedin.com/in/joaopauloaramuni/',
    review: 'Daniel é um dos nossos estudantes mais dedicados. Os resultados obtidos por ele são consequência da sua maturidade para estudar, consistência em suas entregas e envolvimento com a comunidade. Sua resiliência para contornar adversidades é inspiradora. Sem dúvida terá uma carreira brilhante na área de desenvolvimento e tenho orgulho de fazer parte dessa trajetória.',
  },
  {
    avatar: AVTR2,
    name: 'Maria Silvia Schettino',
    linkedIn: 'https://www.linkedin.com/in/joaopauloaramuni/',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. Adipisci aut similique repudiandae minus ab ea, doloribus quidem quaerat. Reiciendis dolor enim cupiditate veritatis iusto! Eius, temporibus?',
  },
  {
    avatar: AVTR3,
    name: 'Rafael Luiz RL',
    linkedIn: 'https://www.linkedin.com/in/joaopauloaramuni/',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. ',
  },
  {
    avatar: AVTR4,
    name: 'Zezé',
    linkedIn: 'https://www.linkedin.com/in/joaopauloaramuni/',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. Adipisci aut similique repudiandae minus ab ea, doloribus quidem quaerat. Reiciendis dolor enim cupiditate veritatis iusto! Eius, temporibus?',
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({
            avatar, name, linkedIn, review,
          }, ctt) => (
            <SwiperSlide key={ctt} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              {/* <h5 className="client__name">{name}</h5> */}
              <a
                href={linkedIn}
                className="btn-testimonials"
                target={name}
                rel="noreferrer"
              >
                {name}
              </a>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
}

export default Testimonials;
