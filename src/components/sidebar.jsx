import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './sidebar.scss';

const Sidebar = () => (
  <nav id="sidebar">
    <Link to="/">zixia.lu</Link>
    <ul>
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
