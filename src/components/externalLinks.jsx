import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './externalLinks.scss';

const ExternalLinks = () => (
  <ul className="external-links">
    <li><FontAwesomeIcon icon={faGithub} /></li>
    <li><FontAwesomeIcon icon={faLinkedin} /></li>
    <li><FontAwesomeIcon icon={faAt} /></li>
  </ul>
);

ExternalLinks.propTypes = {
};

ExternalLinks.defaultProps = {
};

export default ExternalLinks;
