import React from "react"
import { Link } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"
import Button from "@UI/Button"
import Socials from "@components/Socials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Button>Say Hello</Button>
    <Button transparent>Know more</Button>
    <Socials />
  </Layout>
)

export default IndexPage
