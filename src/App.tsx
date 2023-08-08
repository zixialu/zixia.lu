import { useState } from 'react';

import Layout from './components/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <Layout>
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
