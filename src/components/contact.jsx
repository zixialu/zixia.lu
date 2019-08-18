import React from 'react';

import ExternalLinks from './externalLinks';
import './contact.scss';

const Contact = () => (
  <section id="contact">
    <h1 className="text--xxxxl">Contact</h1>

    <p>
      I&apos;m most active and reachable by
      {' '}
      <a href="mailto:zixialu@gmail.com">email</a>
      , but you can also find me on
      {' '}
      <a
        href="https://www.linkedin.com/in/zixialu/"
        target="_blank"
        rel="noreferrer noopener"
      >
        LinkedIn
      </a>
      .
    </p>

    <ExternalLinks vertical showText />
  </section>
);

Contact.propTypes = {
};

Contact.defaultProps = {
};

export default Contact;
