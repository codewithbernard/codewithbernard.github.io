import React from "react"
import { StyledSocials } from "./styled"
import Icon from "./Icon"
import Mobile from "./Mobile"

import socialItems from "@constants/social"

const Socials = () => {
  return (
    <>
      <StyledSocials>
        {socialItems.map(({ name, link }, index) => (
          <li key="index">
            <a rel="noopener noreferrer" target="_blank" href={link}>
              <Icon name={name} />
            </a>
          </li>
        ))}
      </StyledSocials>
      <Mobile socials={socialItems} />
    </>
  )
}

export default Socials
