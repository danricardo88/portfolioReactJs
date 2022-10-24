import React from 'react';
import './testimonials.css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import 'swiper/swiper.min.css';

// import 'swiper/css';
// import 'swiper/css/pagination';
// PEDIR AJUDA NO SWIPER CONFIG, FALHEI MISERAVELMENTE

const data = [
  {
    avatar: AVTR1,
    name: 'Mariana Otta',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. Adipisci aut similique repudiandae minus ab ea, doloribus quidem quaerat. Reiciendis dolor enim cupiditate veritatis iusto! Eius, temporibus?',
  },
  {
    avatar: AVTR2,
    name: 'Pedro Ygor',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. Adipisci aut similique repudiandae minus ab ea, doloribus quidem quaerat. Reiciendis dolor enim cupiditate veritatis iusto! Eius, temporibus?',
  },
  {
    avatar: AVTR3,
    name: 'Daniel Outeiro',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. ',
  },
  {
    avatar: AVTR4,
    name: 'Zezé',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. Adipisci aut similique repudiandae minus ab ea, doloribus quidem quaerat. Reiciendis dolor enim cupiditate veritatis iusto! Eius, temporibus?',
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // install
        // Swiper
        // modules={[Pagination, Navigation]}
        // spaceBetween={40}
        // slidesPerView={1}
        // pagination={{ clickable: true }}
      >
        {
          data.map(({
            avatar, name, review,
          }, ctt) => (
            <SwiperSlide key={ctt} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
}

export default Testimonials;
