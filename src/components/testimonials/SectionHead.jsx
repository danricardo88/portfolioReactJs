/* eslint-disable react/prop-types */
import React from 'react';

function SectionHead({ icon, title, className }) {
  return (
    <div className={`section__head ${className}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHead;
