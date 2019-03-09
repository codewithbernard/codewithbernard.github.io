import React from "react"
import PropTypes from "prop-types"
import { StyledIcon } from "./styled"

import SVG from "@UI/SVG"

const Icon = ({ name, to }) => {
  return (
    <StyledIcon>
        <SVG name={name} />
      <p>{name}</p>
    </StyledIcon>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default Icon
