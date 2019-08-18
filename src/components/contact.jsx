import React from 'react';

import ExternalLinks from './externalLinks';
import './contact.scss';

const Contact = () => (
  <section id="contact">
    <h1 className="text--xxxxl">Contact</h1>

    <p className="text--lg">
      Zixia is reachable by
      {' '}
      <a href="mailto:zixialu@gmail.com">email</a>
      , or on
      {' '}
      <a
        href="https://www.linkedin.com/in/zixialu/"
        target="_blank"
        rel="noreferrer noopener"
      >
        LinkedIn
      </a>
      . You can also take a peek at all the great and terrible things he&apos;s made on
      {' '}
      <a
        href="https://github.com/zixialu"
        target="_blank"
        rel="noreferrer noopener"
      >
        GitHub
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
