import React from "react"

import Layout from "@components/Layout"
import SEO from "@components/seo"
import Landing from "@components/Sections/Landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
  </Layout>
)

export default IndexPage
