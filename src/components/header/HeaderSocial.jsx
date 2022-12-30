import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';

function HeaderSocial() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/danielricardo/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/danricardo88"
        target="_blank"
        rel="noreferrer"
      >
        <GoMarkGithub />
      </a>
      <a
        href="https://www.instagram.com/giganterj/"
        t
        arget="_blank"

      >
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocial;
