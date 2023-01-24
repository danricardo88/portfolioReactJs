import React, { useState } from 'react';
import './testimonials.css';
import { ImQuotesLeft } from 'react-icons/im';

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import AVTR1 from '../../assets/avatar1.jpeg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import SectionHead from './SectionHead';
import Card from './Card';

const testimonials = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'João Paulo Aramuni',
    linkedIn: 'https://www.linkedin.com/in/joaopauloaramuni/',
    review: 'Daniel é um dos nossos estudantes mais dedicados. Os resultados obtidos por ele são consequência da sua maturidade para estudar, consistência em suas entregas e envolvimento com a comunidade. Sua resiliência para contornar adversidades é inspiradora. Sem dúvida terá uma carreira brilhante na área de desenvolvimento e tenho orgulho de fazer parte dessa trajetória.',
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Maria Silvia Schettino',
    linkedIn: 'https://www.linkedin.com/in/joaopauloaramuni/',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. Adipisci aut similique repudiandae minus ab ea, doloribus quidem quaerat. Reiciendis dolor enim cupiditate veritatis iusto! Eius, temporibus?',
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Rafael Luiz RL',
    linkedIn: 'https://www.linkedin.com/in/joaopauloaramuni/',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. ',
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Zezé',
    linkedIn: 'https://www.linkedin.com/in/joaopauloaramuni/',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. Adipisci aut similique repudiandae minus ab ea, doloribus quidem quaerat. Reiciendis dolor enim cupiditate veritatis iusto! Eius, temporibus?',
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const {
    avatar,
    name,
    linkedIn,
    review,
  } = testimonials[index];

  const handlePrevTestimonial = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const handleNextTestimonial = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };
  return (

    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <SectionHead className="testimonials__head" />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${review}"`}</p>
          <h4>
            <a
              href={linkedIn}
              className="testimonials__btn"
              target={name}
              rel="noreferrer"
            >
              {name}
            </a>
          </h4>
          {/* <small className="testimonial__title">{linkedin}</small> */}
        </Card>

        <div className="testimonials__btn-container">
          <button
            type="button"
            className="testimonials__btn"
            onClick={handlePrevTestimonial}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            type="button"
            className="testimonials__btn"
            onClick={handleNextTestimonial}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
// <a
//   href={linkedIn}
//   className="testimonials__btn"
//   target={name}
//   rel="noreferrer"
// >
//   {name}
// </a>;
