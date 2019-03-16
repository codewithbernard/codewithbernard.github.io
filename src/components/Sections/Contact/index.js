import React from "react"

import { H2, H3 } from "@UI/Heading"
import Button from "@UI/Button"
import { Section } from "./styled"
import Input from "@UI/Input"
import TextArea from "@UI/TextArea"

const Contact = () => {
  return (
    <Section>
      <form
        action="https://formspree.io/bado.bernard94@gmail.com"
        method="POST"
      >
        <H2>Want To Work Together?</H2>
        <H3>I probably do, too. Tell me about yourself and your project!</H3>
        <Input name="name" type="text" placeholder="John Doe" label="Name" />
        <Input
          name="email"
          type="email"
          placeholder="name@example.com"
          label="E-Mail"
        />
        <TextArea name="body" placeholder="How can I help you?" />
        <Button type="submit">Send</Button>
      </form>
    </Section>
  )
}

export default Contact
