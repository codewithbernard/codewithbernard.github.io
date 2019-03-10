import React from "react"

import Layout from "@components/Layout"
import SEO from "@components/seo"
import Landing from "@components/sections/Landing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
  </Layout>
)

export default IndexPage
