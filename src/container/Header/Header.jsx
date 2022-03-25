import React from 'react';
import images from '../../constants/images';

import './Header.css';

const Header = () => (

  <div className="app__header app__wrapper section__padding" id="home">

    <div className="app__wrapper_info">

      <h1 className="app__header-h1">A Chave Para um Dia Melhor</h1>

      <p className="p__opensans" style={{margin: '2rem 0'}}>
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
      </p>

      <button className="custom__button" type='button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.massadoce} alt="header_img" />   
    </div>

  </div>
);

export default Header;
