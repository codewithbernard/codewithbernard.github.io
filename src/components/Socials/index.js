import React from "react"
import { StyledSocials } from "./styled"
import Icon from "./Icon"
import Mobile from "./Mobile"

const Socials = () => {
  return (
    <>
      <StyledSocials>
        <li>
          <Icon name="facebook" />
        </li>
        <li>
          <Icon name="instagram" />
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
      <Mobile />
    </>
  )
}

export default Socials
