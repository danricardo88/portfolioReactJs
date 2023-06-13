import React from 'react';
import CV from '../../assets/curriculoPTBR.pdf';

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Curriculum Vitae</a>
      <a href="#contact" className="btn btn-primary">Fale Comigo !</a>
    </div>
  );
}

export default CTA;
