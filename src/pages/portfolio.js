import React from "react"

import Layout from "@components/Layout"
import SEO from "@components/seo"
import Portfolio from "@components/Sections/Portfolio"

const PortoflioPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <Portfolio />
  </Layout>
)

export default PortoflioPage
