import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contato</h1>
        <p className="p__opensans">Lorem Ipsum Dolor (Endereço) Sit Adipisicing Elit.</p>
        <p className="p__opensans">+55 19-98542-1302</p>
        <p className="p__opensans">+55 19-92564-5516</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="caveat">Boulanger</h1>
        <p className="p__opensans">&quot;A melhor maneira de se encontrar é se perder a serviço dos outros.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horários</h1>
        <p className="p__opensans">Seg - Sex:</p>
        <p className="p__opensans">06:00 - 20:00 </p>
        <p className="p__opensans">Sab - Dom:</p>
        <p className="p__opensans">06:00 - 18:00 </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Copyright (c) 2022 M.Kenzo. All Rights Reserved</p>
    </div>

  </div>
);

export default Footer;
