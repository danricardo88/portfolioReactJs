import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { GiAnatomy, GiSkills } from 'react-icons/gi';
import ME from '../../assets/me-about.jpg';

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
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Project</h5>
              <small>Lorem, ipsum dolor.</small>
            </article>

            <article className="about__card">
              <GiAnatomy className="about__icon" />
              <h5>HardSkills</h5>
              <small>Lorem, ipsum.</small>
            </article>

            <article className="about__card">
              <GiSkills className="about__icon" />
              <h5>SoftSkills</h5>
              <small>Lorem, ipsum.</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Amet est voluptate praesentium itaque fuga dignissimos nemo quos ex reiciendis,
            facere fugit aut enim modi, doloribus ad cupiditate natus minus! Repellat!
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
