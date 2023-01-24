import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { GiAnatomy, GiSkills } from 'react-icons/gi';
import ME from '../../assets/me-about1.png';

function About() {
  return (
    <section id="about">

      <h5>Ge To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about__image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <a href="#portfolio">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Project</h5>
                <small>Projects developed and completed during my studies.</small>
              </article>
            </a>

            <a href="#experience">
              <article className="about__card">
                <GiAnatomy className="about__icon" />
                <h5>HardSkills</h5>
                <small>Skills that I have already acquired and that I will still acquire.</small>
              </article>
            </a>

            <a href="#softskill">
              <article className="about__card">
                <GiSkills className="about__icon" />
                <h5>SoftSkills</h5>
                <small>Social-emotional and self-leadership skills.</small>
              </article>
            </a>
          </div>
          <p>
            I live in Rio de Janeiro, Brasil.
            I'm 34 years old and I'm starting my career as a web developer.
            I'm in a career transition,
            leaving construction work to reinvent myself as a software programmer.
            I am currently a student at the Trybe programming school,
            one of the best and most qualified teaching institutions.
            Already trained in Front-End and soon I will be earning my Back-End certificate.
            Owner of a jovial and obstinate spirit, always looking for new learning and challenges!
            I am looking for opportunities to develop my skills and add value to the team.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;

// Neste Campo irei trabalhar com HardSkill, Softskills e Projetos.
// opções de icons: FiUsers / GiSkills / SiSkillshare / HiCode //
