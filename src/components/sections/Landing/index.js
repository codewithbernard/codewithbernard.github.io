import React from "react"

import Button from "@UI/Button"
import Socials from "@components/Socials"
import { Section, Introduction, Image, SocialsSection } from "./styled"

import originalFace from "@assets/original_face.svg"

const Landing = () => {
  return (
    <>
      <Section>
        <Introduction>
          <h1>I'm Bernard Bado</h1>
          <h2>A Web Developer.</h2>
          <h3>Using ReactJs to build beautiful modern websites</h3>
          <Button>Say Hello</Button>
          <Button transparent>Know More</Button>
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
