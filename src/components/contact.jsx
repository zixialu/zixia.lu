import React from 'react';

import ExternalLinks from './externalLinks';
import './contact.scss';

const Contact = () => (
  <section id="contact">
    <h1>Contact</h1>

    <ExternalLinks vertical showNames />
  </section>
);

Contact.propTypes = {
};

Contact.defaultProps = {
};

export default Contact;
