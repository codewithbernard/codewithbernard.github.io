import React from "react"
import PropTypes from "prop-types"

import { ClassicButton, TransparentButton } from "./styled"

const Button = ({ type, children, transparent, animate, onClick }) => {
  if (transparent) {
    return (
      <TransparentButton onClick={onClick} type={type}>
        {children}
      </TransparentButton>
    )
  }
  return (
    <ClassicButton onClick={onClick} animate={animate} type={type}>
      {children}
    </ClassicButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  transparent: PropTypes.bool,
  type: PropTypes.string,
  animate: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  transparent: false,
  type: "button",
  animate: false,
  onClick: () => null,
}

export default Button
