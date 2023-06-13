import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { GiAnatomy, GiSkills } from 'react-icons/gi';
import ME from '../../assets/me-about1.png';

function About() {
  return (
    <section id="about">

      <h2>Esse sou eu !</h2>

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
                <h5>Projetos</h5>
                <small>Meus Projetos desenvolvidos.</small>
              </article>
            </a>

            <a href="#experience">
              <article className="about__card">
                <GiAnatomy className="about__icon" />
                <h5>Hard Skills</h5>
                <small>Tecnologias e habilidades.</small>
              </article>
            </a>

            <a href="#softskill">
              <article className="about__card">
                <GiSkills className="about__icon" />
                <h5>Soft Skills</h5>
                <small>Habilidades interpessoais.</small>
              </article>
            </a>
          </div>
          <p>
            Olá! Estou muito animado em me candidatar para uma oportunidade na sua empresa.
            Permitam-me apresentar um pouco sobre mim.
          </p>
          <p>
            Sou um profissional de 34 anos, atualmente residindo na cidade do Rio de Janeiro.
            Em 2021 decidi fazer uma transição de carreira e seguir minha paixão pela tecnologia.
            Iniciei meus estudos de forma autodidata, mas logo percebi que precisava de
            uma orientação mais estruturada.
            Foi quando me matriculei na Trybe, uma escola de programação.
            Concluí meus estudos e agora estou buscando uma oportunidade no mercado de
            trabalho para aplicar e fortalecer minhas habilidades técnicas e pessoais.
          </p>
          <p>
            Durante o curso da Trybe, tive a oportunidade de vivenciar mais de 1500 horas de
            experiências práticas, inclusive prestando serviços como desenvolvedor freelance.
            Essas experiências me permitiram aplicar meus conhecimentos em projetos reais,
            aprimorando minhas habilidades técnicas e a capacidade de trabalhar em equipe.
          </p>
          <p>
            Acredito que a combinação entre minha formação, minha experiência como desenvolvedor
            freelance e minha determinação em aprender e crescer no campo da tecnologia
            me tornam um profissional dedicado e comprometido.
          </p>
          <p>
            Estou pronto para enfrentar desafios e contribuir para o sucesso da sua empresa.
            Agradeço sinceramente pela atenção e aguardo ansiosamente a
            oportunidade de discutir como posso agregar valor ao seu time.
          </p>

          <a href="#contact" className="btn btn-primary">Vamos conversar ?</a>
        </div>
      </div>
    </section>
  );
}

export default About;

// Neste Campo irei trabalhar com HardSkill, Softskills e Projetos.
// opções de icons: FiUsers / GiSkills / SiSkillshare / HiCode //
