import React from 'react';

const Footer = () => (
  <footer>
    ©
    {' '}
    {new Date().getFullYear()}
    {' '}
    Zixia Lu, Built with
    {' '}
    <a href="https://www.gatsbyjs.org">Gatsby</a>

    . View this site on
    {' '}
    <a href="https://github.com/zixialu/zixia.lu">GitHub</a>
  </footer>
);

Footer.propTypes = {
};

export default Footer;
