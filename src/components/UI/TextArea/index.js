import React from "react"
import PropTypes from "prop-types"

import { StyledTextArea } from "./styled"

const TextArea = ({ name, placeholder }) => {
  return (
    <StyledTextArea
      data-gramm_editor="false"
      name={name}
      placeholder={placeholder}
    />
  )
}

TextArea.propTypes = {
  name: PropTypes.string,
}

TextArea.defaultProps = {
  name: "",
}

export default TextArea
