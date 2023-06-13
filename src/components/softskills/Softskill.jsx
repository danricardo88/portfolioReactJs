import React from 'react';
import './softskill.css';
import { BiCheck } from 'react-icons/bi';

function Softskill() {
  return (
    <section id="softskill">
      {/* <h5>What I Offer</h5> */}
      <h2>Soft Skills</h2>

      <div className="container services__container">
        <article className="softskill">
          <div className="service__head">
            <h3>Habilidades Socioemocionais</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service_list-icon" />
              <p>Iniciativa social.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Assertividade.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Entusiasmo.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Empatia.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Respeito a pluralidade de ideias.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Comunicatividade.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Receptivo.</p>
            </li>

          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="softskill">
          <div className="service__head">
            <h3>Habilidades em Equipe</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service_list-icon" />
              <p>Curiosidade para aprender.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Imaginação criativa.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Tolerância ao estresse.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Tomada de decisão rápida.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Tolerância à frustração.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Comunicação assertiva.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Facilidade em dar e receber feedback.</p>
            </li>

          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="softskill">
          <div className="service__head">
            <h3>Habilidades de Autogestão</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service_list-icon" />
              <p>Determinação.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Organização.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Focado.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Persistência.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Autoliderança.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Resiliente.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Obstinado.</p>
            </li>

          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
}

export default Softskill;
