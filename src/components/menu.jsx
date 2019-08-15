import { Link } from 'gatsby';
import React from 'react';

import ExternalLinks from './externalLinks';
import './menu.scss';

const Menu = () => (
  <nav id="menu">
    <Link to="/" className="brand text--xxxxl">zixia.lu</Link>
    <ul className="nav-list">
      <li className="text--lg"><a href="#about">About</a></li>
      <li className="text--lg"><a href="#projects">Projects</a></li>
      <li className="text--lg"><a href="#contact">Contact</a></li>
    </ul>

    <ExternalLinks />
  </nav>
);

Menu.propTypes = {
};

Menu.defaultProps = {
};

export default Menu;
