import React from "react"
import { StyledSocials } from "./styled"
import Icon from "./Icon"

const Socials = () => {
  return (
    <StyledSocials>
      <li>
        <Icon name="facebook"/>
      </li>
      <li>
        <Icon name="github" />
      </li>
      <li>
        <Icon name="medium" />
      </li>
      <li>
        <Icon name="twitter" />
      </li>
    </StyledSocials>
  )
}

export default Socials
