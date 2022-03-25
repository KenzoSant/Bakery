import React from 'react';

import {  MenuItem } from '../../components'
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  
  <div className="app__specialMenu flex__center " id="menu">

    <div className="app__specialMenu-title">      
      <h1 className="headtext__caveat">Especiais de Hoje</h1> 
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Bebidas</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
    
      <div className="app__specialMenu-menu_img ">
          <img src={images.menu} alt="menu img" /> 
      </div>

      <div className="app__specialMenu-menu_foods flex__center">
        <p className='app__specialMenu-menu_heading'>Comida</p>
        <div className="app__specialMenu_menu_items">
          {data.foods.map((foods, index) => (
            <MenuItem key={foods.title + index} title={foods.title} price={foods.price} tags={foods.tags} />
          ))}
        </div>
      </div> 

    </div>

    <div>
      <button className="custom__button" type='button'>Veja Mais</button>
    </div>

  </div> 
);

export default SpecialMenu;
