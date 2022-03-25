import React from 'react';

import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <h1 className="headtext__caveat">Nosso Informativo</h1>
      <p className="p__opensans">Mandamos para você nossas novidades</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Digite seu E-mail" />
      <button type="button" className="custom__button">Inscrever</button>
    </div>
  </div>
);

export default Newsletter;
