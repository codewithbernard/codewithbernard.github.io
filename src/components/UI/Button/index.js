import React from "react"
import PropTypes from "prop-types"

import { ClassicButton, TransparentButton } from "./styled"

const Button = ({ type, children, transparent }) => {
  if (transparent) {
    return <TransparentButton type={type}>{children}</TransparentButton>
  }
  return <ClassicButton type={type}>{children}</ClassicButton>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  transparent: false,
  type: "button",
}

export default Button
