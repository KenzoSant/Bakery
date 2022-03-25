import React from 'react';


// import {images} from '../../constants'
import './AboutUs.css';


const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__caveat">Sobre Nós</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Saiba Mais</button>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__caveat">Nossa História</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Saiba Mais</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
