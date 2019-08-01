import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/about';
import Projects from '../components/about';
import Contact from '../components/about';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Test page please ignore</h1>
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
