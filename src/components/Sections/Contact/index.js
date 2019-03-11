import React from "react"

import { H2, H3 } from "@UI/Heading"
import { Section } from "./styled"
import Input from "@UI/Input"
import TextArea from "@UI/TextArea"

const Contact = () => {
  return (
    <Section>
      <H2>Want To Work Together?</H2>
      <H3>I probably do, too. Tell me about yourself and your project!</H3>
      <Input placeholder="John Doe" label="Name" />
      <Input placeholder="name@example.com" label="E-Mail" />
      <TextArea placeholder="How can I help you?" />
    </Section>
  )
}

export default Contact
