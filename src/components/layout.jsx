/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import ScrollIndicator from './scrollIndicator';
import Menu from './menu';
import './layout.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div id="app">
      <Menu />
      <div id="content-pane">
        <ScrollIndicator />
        <div id="content">
          <main>{children}</main>
          <footer>
            ©
            {' '}
            {new Date().getFullYear()}
            , Built with
            {' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>

            . View this site on
            {' '}
            <a href="https://github.com/zixialu/zixia.lu">GitHub</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
