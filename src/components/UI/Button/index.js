import React from "react"
import PropTypes from "prop-types"

import { ClassicButton, TransparentButton } from "./styled"

const Button = ({ children, transparent }) => {
  if (transparent) {
    return <TransparentButton>{children}</TransparentButton>
  }
  return <ClassicButton>{children}</ClassicButton>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
}

Button.defaultProps = {
  transparent: false,
}

export default Button
