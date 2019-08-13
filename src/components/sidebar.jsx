import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './sidebar.scss';

const Sidebar = () => (
  <nav id="sidebar">
    <Link to="/" className="brand">zixia.lu</Link>
    <ul className="nav-list">
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

Sidebar.propTypes = {
};

Sidebar.defaultProps = {
};

export default Sidebar;
