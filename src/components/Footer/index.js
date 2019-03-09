import React from "react"
import styled from "styled-components"
import { LOGAN } from "@constants/colors"

const Footer = () => {
  return (
    <StyledFooter>
      <p>Stay hungry, Stay foolish</p>
      <p>BernardB. © {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  color: ${LOGAN};
  padding: 0 2em 1em 2em;
`
