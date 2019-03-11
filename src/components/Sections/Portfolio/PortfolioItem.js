import React from "react"

import { StyledPortfolioItem } from "./styled"
import Button from "@UI/Button"

const PortfolioItem = ({ url }) => {
  return (
    <StyledPortfolioItem url={url}>
      <Button>Live demo</Button>
      <Button>Code</Button>
    </StyledPortfolioItem>
  )
}

export default PortfolioItem
