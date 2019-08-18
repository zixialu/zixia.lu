import React from 'react';
import PropTypes from 'prop-types';
import * as classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './externalLinks.scss';

const links = [
  {
    type: 'LinkedIn',
    account: 'zixialu',
    url: 'https://www.linkedin.com/in/zixialu/',
    icon: faLinkedin,
  },
  {
    type: 'GitHub',
    account: 'zixialu',
    url: 'https://github.com/zixialu',
    icon: faGithub,
  },
  {
    type: 'Email',
    account: 'zixialu@gmail.com',
    url: 'mailto:zixialu@gmail.com',
    target: '_self',
    icon: faEnvelope,
  },
];

const ExternalLinks = ({ vertical, showText }) => (
  <ul
    className={classNames(
      'external-links', { 'external-links--vertical': vertical },
    )}
  >
    {links.map((link) => (
      <li key={link.type}>
        <a
          href={link.url}
          target={link.target || '_blank'}
          rel="noreferrer noopener"
        >
          <div className="icon-container-square">
            <FontAwesomeIcon icon={link.icon} />
          </div>
          {showText && (
            <span className="link-text">{`${link.type}: ${link.account}`}</span>
          )}
        </a>
      </li>
    ))}
  </ul>
);

ExternalLinks.propTypes = {
  vertical: PropTypes.bool,
  showText: PropTypes.bool,
};

ExternalLinks.defaultProps = {
  vertical: false,
  showText: false,
};

export default ExternalLinks;
