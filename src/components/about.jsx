import React from 'react';

const About = () => (
  <section id="about">
    <h1 className="text--xxxxl">
      Zixia Lu is a full-stack web developer based in Toronto.
    </h1>

    <p className="text--xl">
      Raised by Saturday morning cartoons and a dialup modem, Zixia knew at an
      early age that he was destined for great things.
    </p>

    <p className="text--xl">
      <strong>He could not have possibly known what the universe had in store.</strong>
    </p>

    <aside>
      <p className="text--xxl">
        This is a
        <br />
        <strong>🚧WORK-IN-PROGRESS🚧</strong>
      </p>

      <p className="text--xl">
        That is to say, there&apos;s nothing of substance yet! Stay tuned, and
        feel free to take a peek at
        {' '}
        <strong><a href="https://github.com/zixialu/zixia.lu">this project on GitHub</a></strong>
        .
      </p>
    </aside>
  </section>
);

About.propTypes = {
};

About.defaultProps = {
};

export default About;
