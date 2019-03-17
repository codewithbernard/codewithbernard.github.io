import React from "react"
import PropTypes from "prop-types"
import { StyledIcon } from "./styled"

import SVG from "@UI/SVG"

const Icon = ({ name, to }) => {
  return (
    <StyledIcon rel="noopener noreferrer" target="_blank" href={to}>
      <SVG name={name} />
      <p>{name}</p>
    </StyledIcon>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Icon
