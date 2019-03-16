import React from "react"
import PropTypes from "prop-types"

import { StyledInput, Label } from "./styled"

const Input = ({ name, type, label, placeholder }) => {
  return (
    <Label>
      <StyledInput name={name} type={type} placeholder={placeholder} />
      {label}
    </Label>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
}

Input.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  name: "",
}

export default Input
