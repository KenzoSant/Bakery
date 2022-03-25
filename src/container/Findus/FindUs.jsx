import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__caveat" style={{ marginBottom: '2rem' }}>Onde estamos</h1>

      <div className="app__wrapper-content">
        <p className="p__opensans">Lorem ipsum dolor (Endereço) sit adipisicing elit.</p>
        <p className="p__caveat_menu" style={{margin:'2rem 0'}}>Horários.</p>
        <p className="p__opensans">Seg - Sex: 06:00 - 20:00 .</p>
        <p className="p__opensans">Sab - Dom: 06:00 - 18:00 .</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Nos Visite</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.doce3} alt="findus" />
    </div>
  </div>
);

export default FindUs;
