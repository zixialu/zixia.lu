// import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

import ExternalLinks from './ExternalLinks';

const Menu = () => (
  <Nav id="menu" className="background--primary">
    {/* TODO: Replace */}
    <a href="/" className="brand text--xl">zixia.lu</a>
    <ul className="nav-list">
      <li className="text--lg"><a href="#about">About</a></li>
      <li className="text--lg"><a href="#projects">Projects</a></li>
      <li className="text--lg"><a href="#contact">Contact</a></li>
    </ul>

    <ExternalLinks />
  </Nav>
);

const Nav = styled.nav`
  flex: 0 1 auto;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;

  z-index: 1;

  padding-bottom: 1em;

  @media only screen and (min-width: 900px) {
      position: -webkit-sticky;
      position: sticky;
      top: 0;

      height: 100vh;
      align-items: flex-start;
      text-align: start;
  }

  .brand {
    font-weight: 900;
    font-style: italic;
    line-height: 1.2em; // $heading-line-height

    margin: 30vh auto 0.5rem;

    @media only screen and (min-width: 900px) {
      margin: 0.75rem 1.45rem;
    }
  }

  .nav-list {
    list-style-type: none;

    margin: 0 1.45rem 5rem;

    @media only screen and (min-width: 900px) {
      flex: 1 0 auto;
    }

    li {
      font-weight: 900;
      font-style: italic;

      margin: 0 auto 0.75rem;
    }
  }

  .external-links {
    align-self: stretch;
  }
`;

Menu.propTypes = {
};

Menu.defaultProps = {
};

export default Menu;
