import React from "react"
import styled from "styled-components"
import { LOGAN } from "@constants/colors"

const Footer = () => {
  return (
    <StyledFooter>
      <p>Screw it, let’s do it!</p>
      <p>BernardB. © {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  color: ${LOGAN};
  padding-bottom: 1em;
  flex-shrink: 0;
`
