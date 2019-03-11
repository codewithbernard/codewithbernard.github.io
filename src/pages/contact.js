import React from "react"

import Layout from "@components/Layout"
import SEO from "@components/seo"
import Contact from "@components/Sections/Contact"

const PortoflioPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`Contact`, `Contact Me`, `Contact me to build the website`, 'React developer', 'I want website', 'I need website']} />
    <Contact />
  </Layout>
)

export default PortoflioPage
