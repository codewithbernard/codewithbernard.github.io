import React from "react"
import Navigation from "@components/Header/Navigation"
import Logo from "@components/Header/Logo"

import { StyledHeader } from "./styled"

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  )
}

export default Header
