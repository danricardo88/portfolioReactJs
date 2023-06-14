import React from 'react';
import './footer.css';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">Daniel Ricardo</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        {/* <li><a href="#experience">Experiência</a></li> */}
        <li><a href="#softskill">Softskill</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Depoimentos</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/danricardo88"><GoMarkGithub /></a>
        <a href="https://www.linkedin.com/in/danielricardo/"><BsLinkedin /></a>
        <a href="https://www.instagram.com/giganterj/"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; danricardo88. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
