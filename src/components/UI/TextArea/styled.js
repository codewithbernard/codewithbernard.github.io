import styled from "styled-components"
import * as COLORS from "@constants/colors"

const StyledTextArea = styled.textarea`
  font-family: Poppins;
  resize: none;
  width: 100%;
  font-weight: 200;
  font-size: 18px;
  color: ${COLORS.DARK_GRAY};
  height: 135px;
  border: 1px solid ${COLORS.DARK_GRAY};

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${COLORS.LOGAN};
    text-align: center;
    padding-top: 15px;
    font-weight: 200;
    font-size: 18px;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${COLORS.LOGAN};
    text-align: center;
    padding-top: 15px;
    font-weight: 200;
    font-size: 18px;
  }

  &:-ms-input-placeholder {
    /* IE 10+ */
    color: ${COLORS.LOGAN};
    text-align: center;
    padding-top: 15px;
    font-weight: 200;
    font-size: 18px;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${COLORS.LOGAN};
    text-align: center;
    padding-top: 15px;
    font-weight: 200;
    font-size: 18px;
  }
`

export { StyledTextArea }
