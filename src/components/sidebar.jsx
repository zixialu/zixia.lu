import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './sidebar.scss';

const Sidebar = () => (
  <nav id="sidebar">
    <Link to="/" className="brand">zixia.lu</Link>
    <ul className="nav-list">
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </nav>
);

Sidebar.propTypes = {
};

Sidebar.defaultProps = {
};

export default Sidebar;
