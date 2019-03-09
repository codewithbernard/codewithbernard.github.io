import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/UI/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Button>Say Hello</Button>
    <Button transparent>Know more</Button>
  </Layout>
)

export default IndexPage
