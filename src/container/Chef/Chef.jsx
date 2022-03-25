import React from 'react';

import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      
      <h1 className="headtext__caveat">Em Que Acreditamos</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
          <p className="p__opensans"> Nam corrupti, quis fuga ipsum sapiente cumque, fugit, labore consequuntur atque dolore eaque vel.. Harum blanditiis, atque porro culpa neque autem quam et nam illum assumenda dolore sunt.</p>
      </div>

      <div className="app__chef-sign">
        <p>Emma Spencer</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>

  </div>
);

export default Chef;
