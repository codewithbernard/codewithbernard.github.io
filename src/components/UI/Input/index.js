import React from "react"

import { StyledInput, Label } from "./styled"

const Input = ({ label, placeholder }) => {
  return (
    <Label>
      <StyledInput type="text" placeholder={placeholder} />
      {label}
    </Label>
  )
}

export default Input
