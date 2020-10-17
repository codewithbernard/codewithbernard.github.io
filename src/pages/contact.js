import React from "react"

import SEO from "@components/seo"
import Contact from "@components/Sections/Contact"

const PortoflioPage = () => (
  <>
    <SEO
      title="Contact"
      keywords={[
        `Contact`,
        `Contact Me`,
        `Contact me to build the website`,
        "React developer",
        "I want website",
        "I need website",
      ]}
    />
    <Contact />
  </>
)

export default PortoflioPage
