import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './externalLinks.scss';

const links = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zixialu/',
    icon: faLinkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/zixialu',
    icon: faGithub,
  },
  {
    name: 'Email',
    url: 'mailto:zixialu@gmail.com',
    target: '_self',
    icon: faEnvelope,
  },
];

const ExternalLinks = ({ vertical }) => (
  <ul className="external-links">
    {links.map((link) => (
      <li key={link.name}>
        <a
          href={link.url}
          target={link.target || '_blank'}
          rel="noreferrer noopener"
        >
          <div className="icon-container-square">
            <FontAwesomeIcon icon={link.icon} />
          </div>
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
