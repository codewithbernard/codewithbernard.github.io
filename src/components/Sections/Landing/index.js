import React from "react"

import Button from "@UI/Button"
import Socials from "@components/Socials"
import { Section, Introduction, Image, SocialsSection, Buttons } from "./styled"
import { H1, H2, H3 } from "@UI/Heading"

import originalFace from "@assets/original_face.svg"

const Landing = () => {
  return (
    <>
      <Section>
        <Introduction>
          <H1>I'm Bernard Bado</H1>
          <H2>A Web Developer.</H2>
          <H3>Using ReactJs to build beautiful and modern websites</H3>
          <Buttons>
            <Button animate>Say Hello</Button>
            <Button transparent>Know More</Button>
          </Buttons>
        </Introduction>
        <Image>
          <img src={originalFace} alt="Avatar" />
        </Image>
      </Section>
      <SocialsSection>
        <Socials />
      </SocialsSection>
    </>
  )
}

export default Landing
