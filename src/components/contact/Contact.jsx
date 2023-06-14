import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_onnh4kv', 'template_wi3tdiu', form.current, 'MR5AU8c1R0Fqjrqaq');
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Contrate-me agora</h5>
      <h2>Entre em Contato</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>daniel.ricardo88@outlook.com</h5>
            <a href="mailto:daniel.ricardo88@outlook.com" target="_blank" rel="noreferrer">Envie uma Mensagem</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Daniel Ricardo</h5>
            <a href="https://m.me/danielricardo88" target="_blank" rel="noreferrer">Envie uma Mensagem</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 21 97582 7291</h5>
            <a href="https://api.whatsapp.com/send?phone=5521975827291" target="_blank" rel="noreferrer">Envie uma Mensagem</a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Seu E-Mail"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Escreva sua mensagem"
            required
          />
          <button type="submit" className="btn btn-primary">Envie uma Mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
