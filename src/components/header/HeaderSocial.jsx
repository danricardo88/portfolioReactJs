import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';

function HeaderSocial() {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
      >
        <GoMarkGithub />
      </a>
      {/* <a href="https://.com" target='_blank'></a> */}
    </div>
  );
}

export default HeaderSocial;
