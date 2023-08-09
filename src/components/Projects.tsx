import React from 'react';

const Projects = () => (
  <section id="projects">
    <a href="/projects">
      <h1>Projects</h1>
    </a>

    <aside>
      <p className="text--lg">
        This is a
        <br />
        <strong>🚧WORK-IN-PROGRESS🚧</strong>
      </p>

      <p className="text--md">
        That is to say, there&apos;s nothing of substance yet! Stay tuned, and
        feel free to take a peek at{' '}
        <strong>
          <a href="https://github.com/zixialu/zixia.lu">
            this project on GitHub
          </a>
        </strong>
        .
      </p>
    </aside>
  </section>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
