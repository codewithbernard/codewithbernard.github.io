import React from "react"
import PropTypes from "prop-types"

import { ClassicButton, TransparentButton } from "./styled"

const Button = ({ type, children, transparent, animate }) => {
  if (transparent) {
    return <TransparentButton type={type}>{children}</TransparentButton>
  }
  return (
    <ClassicButton animate={animate} type={type}>
      {children}
    </ClassicButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
  type: PropTypes.string,
  animate: PropTypes.bool,
}

Button.defaultProps = {
  transparent: false,
  type: "button",
  animate: false,
}

export default Button
