import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export interface ExternalLinksProps {
  vertical?: Boolean;
  showText?: Boolean;
}

const links = [
  {
    type: 'GitHub',
    account: 'zixialu',
    url: 'https://github.com/zixialu',
    icon: faGithub,
    ariaLabel: 'Visit zixialu on GitHub',
  },
  {
    type: 'LinkedIn',
    account: 'zixialu',
    url: 'https://www.linkedin.com/in/zixialu/',
    icon: faLinkedin,
    ariaLabel: 'Visit Zixia on LinkedIn',
  },
  {
    type: 'Email',
    account: 'zixialu@gmail.com',
    url: 'mailto:zixialu@gmail.com',
    target: '_self',
    icon: faEnvelope,
    ariaLabel: 'Send Zixia an email at zixialu@gmail.com',
  },
];

const ExternalLinks = ({ vertical, showText }: ExternalLinksProps) => {
  return (
    <List $vertical={vertical}>
      {links.map((link) => (
        <li key={link.type}>
          <Link
            $showText={showText}
            href={link.url}
            target={link.target || '_blank'}
            rel="external noreferrer noopener"
            aria-label={link.ariaLabel}
          >
            {/* This div keeps the aspect ratio controlled */}
            <div className="icon-container">
              <FontAwesomeIcon icon={link.icon} />
            </div>

            {showText && <span className="link-text">{link.account}</span>}
          </Link>
        </li>
      ))}
    </List>
  );
};

const List = styled.ul<{ $vertical?: Boolean }>`
  display: flex;
  flex-flow: ${({ $vertical }) => ($vertical ? 'column' : 'row')} nowrap;
  justify-content: ${({ $vertical }) => ($vertical ? 'flex-start' : 'center')};
  align-items: ${({ $vertical }) => ($vertical ? 'flex-start' : 'baseline')};
  ${({ $vertical }) => ($vertical ? ' ' : 'width: 100%;')}

  list-style-type: none;

  margin: 0;
  ${({ $vertical }) => ($vertical ? ' margin-top: 2.5em;' : '')}
`;

const Link = styled.a<{ $showText?: Boolean }>`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;

  padding: ${({ $showText }) => ($showText ? '0' : '0.625em')};
  margin: ${({ $showText }) => ($showText ? '0' : '0.25em')};

  .icon-container {
    width: 1.125em;
    height: 1.125em;
    vertical-align: middle;

    svg {
      width: 100%;
      height: 100%;
      margin: auto;
    }
  }

  .link-text {
    padding-left: 0.625em;
  }
`;

export default ExternalLinks;
