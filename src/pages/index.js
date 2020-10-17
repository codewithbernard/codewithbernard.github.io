import React from "react"

import SEO from "@components/seo"
import Landing from "@components/Sections/Landing"

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
  </>
)

export default IndexPage
