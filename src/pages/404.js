import React from "react"

import SEO from "@components/seo"
import { H2, H3 } from "@UI/Heading"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <section>
      <H2>Page Not Found</H2>
      <H3>Sorry but this page is either top secret or doesn't exist!</H3>
    </section>
  </>
)

export default NotFoundPage
