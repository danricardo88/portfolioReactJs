/* eslint-disable react/prop-types */
import React from 'react';

function Card({ className, children }) {
  return (
    <article className={`card ${className}`}>
      {children}
    </article>
  );
}

export default Card;
