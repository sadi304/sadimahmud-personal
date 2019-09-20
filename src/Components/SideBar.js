import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Assets/dp.png';

import './SideBar.css';

const SideBar = () => (
  <>
    <div>
      <h3 className="headline">Sadi Mahmud</h3>
    </div>
    <div>
      <img className="logo rounded" src={Logo} alt="profile-pic" />
      <h6 className="text-center white">dp.png</h6>
    </div>
    <ul className="sidemenu-parent">
      <li>
        <ion-icon name="arrow-dropdown"></ion-icon> src
        <ul className="sidemenu">
          <li>
            <NavLink activeClassName="active" to="/" exact>
              <ion-icon name="contact"></ion-icon>
              about.json
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/skills">
              <ion-icon name="flash"></ion-icon>
              skills.json
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/portfolio">
              <ion-icon name="trophy"></ion-icon>
              portfolio.json
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              <ion-icon name="send"></ion-icon>
              contact.json
            </NavLink>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1dnAEJegyeAXCwIybZd4k9_WkBD9DSkN8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <ion-icon name="document"></ion-icon>
              resume.pdf
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </>
)

export default SideBar;