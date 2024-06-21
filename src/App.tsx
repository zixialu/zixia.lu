import { useState } from 'react';

import Layout from './components/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <Layout>
      {/* <SEO title="Full-stack Developer" /> */}
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
