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
            <h3>Socio-emotional skills</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service_list-icon" />
              <p>Social initiative.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Assertiveness.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Enthusiasm.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Empathy.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>I respect the plurality of ideas.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Communicativeness.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Receptive.</p>
            </li>

          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="softskill">
          <div className="service__head">
            <h3>Team Skills</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service_list-icon" />
              <p>Curiosity to learn.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Creative imagination.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Stress tolerance.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Quick decision making.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Frustration tolerance.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Assertive communication.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Ease of giving and receiving feedback.</p>
            </li>

          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="softskill">
          <div className="service__head">
            <h3>Self-management skills</h3>
          </div>

          <ul className="service__list">

            <li>
              <BiCheck className="service_list-icon" />
              <p>Determination.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Organization.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Focused.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Persistence.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Self-leadership.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Resilient.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Obstinate.</p>
            </li>

          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
}

export default Softskill;
