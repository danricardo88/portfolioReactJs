import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
// import IMG7 from '../../assets/portfolio7.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    projeto: 'https://react-neurofitness.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    projeto: 'https://www.linkedin.com/in/danielricardo/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    projeto: 'https://www.linkedin.com/in/danielricardo/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    projeto: 'https://www.linkedin.com/in/danielricardo/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    projeto: 'https://www.linkedin.com/in/danielricardo/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'https://github.com',
    projeto: 'https://www.linkedin.com/in/danielricardo/',
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
        data.map(({
          id, image, title, github, projeto,
        }) => (
          <article key={id} className="portfolio__item">

            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>

            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={projeto}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Let's Go
              </a>
            </div>

          </article>
        ))
      }

      </div>
    </section>
  );
}

export default Portfolio;
