import React from "react"

import SEO from "@components/seo"
import AboutMe from "@components/Sections/AboutMe"

const PortoflioPage = () => (
  <>
    <SEO
      title="About Me"
      keywords={[
        `About Me`,
        `How I become React Developer`,
        `How I started developing websites`,
        "How to develop websites",
        "How to learn ReactJs",
        "How to build websites with ReactJs",
      ]}
    />
    <AboutMe />
  </>
)

export default PortoflioPage
