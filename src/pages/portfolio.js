import React from "react"

import SEO from "@components/seo"
import Portfolio from "@components/Sections/Portfolio"

const PortoflioPage = () => (
  <>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <Portfolio />
  </>
)

export default PortoflioPage
