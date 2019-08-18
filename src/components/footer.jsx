import React from 'react';

import './footer.scss';

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
