import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Full-stack Developer" />
    <About />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
