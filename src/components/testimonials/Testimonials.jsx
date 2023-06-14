import React, { useState } from 'react';
import './testimonials.css';
import { ImQuotesLeft } from 'react-icons/im';

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import AVTR1 from '../../assets/avatarAramuni.jpeg';
import AVTR2 from '../../assets/avatarAndre.jpeg';
import AVTR3 from '../../assets/avatarTrindade.jpeg';
import AVTR4 from '../../assets/avatarLinike.jpg';
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
    name: 'André Cavalcanti',
    linkedIn: 'https://www.linkedin.com/in/andregcav/',
    review: 'Daniel é um profissional com que podemos contar. Trabalhamos juntos e identifiquei nele um grande potencial em se adaptar aos desafios, sempre focado na resolução de problemas.',
  },
  // {
  //   id: 3,
  //   avatar: AVTR3,
  //   name: 'Marcello Trindade',
  //   linkedIn: 'https://www.linkedin.com/in/marcello-trindade-lopes-b98658189/',
  // eslint-disable-next-line max-len
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur aliquid dolores. ',
  // },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Linike Araújo',
    linkedIn: 'https://www.instagram.com/linikearaujo/',
    review: 'Gostaria de expressar meu profundo reconhecimento pelo seu trabalho como freelancer em nossa empresa. Sua dedicação e competência foram impressionantes. Foi um prazer contar com você em nossos projetos.Seu empenho e profissionalismo foram fundamentais para o sucesso das tarefas. Sua capacidade de lidar com desafios complexos e entregar resultados de alta qualidade foi notável. Agradeço por sua contribuição valiosa e desejo-lhe muito sucesso em sua carreira futura. Atenciosamente, Linike Araújo - Sócio Digital Mkt',
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
      <h2>Depoimentos de Colegas</h2>
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
