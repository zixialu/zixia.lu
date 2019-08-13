import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const ExternalLinks = () => (
  <ul className="external-links">
    <li><FontAwesomeIcon icon={faCoffee} /></li>
  </ul>
);

ExternalLinks.propTypes = {
};

ExternalLinks.defaultProps = {
};

export default ExternalLinks;
