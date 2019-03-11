import React from "react"

import Layout from "@components/Layout"
import SEO from "@components/seo"
import AboutMe from "@components/Sections/AboutMe"

const PortoflioPage = () => (
  <Layout>
    <SEO title="About Me" keywords={[`About Me`, `How I become React Developer`, `How I started developing websites`, 'How to develop websites', 'How to learn ReactJs', 'How to build websites with ReactJs']} />
    <AboutMe />
  </Layout>
)

export default PortoflioPage
