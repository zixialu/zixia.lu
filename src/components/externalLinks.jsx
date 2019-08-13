import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './externalLinks.scss';

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/zixialu',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zixialu/',
    icon: faLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:zixialu@gmail.com',
    target: '_self',
    icon: faAt,
  },
];

const ExternalLinks = () => (
  <ul className="external-links">
    {links.map((link) => (
      <li key={link.name}>
        <a
          href={link.url}
          target={link.target || '_blank'}
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      </li>
    ))}
  </ul>
);

ExternalLinks.propTypes = {
};

ExternalLinks.defaultProps = {
};

export default ExternalLinks;
