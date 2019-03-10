import React from "react"

import Button from "@UI/Button"
import Socials from "@components/Socials"
import { Section, Introduction, Image, SocialsSection, Buttons } from "./styled"

import originalFace from "@assets/original_face.svg"

const Landing = () => {
  return (
    <>
      <Section>
        <Introduction>
          <h1>I'm Bernard Bado</h1>
          <h2>A Web Developer.</h2>
          <h3>Using ReactJs to build beautiful and modern websites</h3>
          <Buttons>
            <Button>Say Hello</Button>
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
