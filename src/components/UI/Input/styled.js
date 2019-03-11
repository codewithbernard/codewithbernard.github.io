import styled from "styled-components"
import * as COLORS from "@constants/colors"

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${COLORS.DARK_GRAY};
  width: 100%;
  text-align: center;
  font-family: Poppins;
  font-weight: 200;
  font-size: 18px;
  color: ${COLORS.DARK_GRAY};
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${COLORS.LOGAN};
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${COLORS.LOGAN};
  }

  &:-ms-input-placeholder {
    /* IE 10+ */
    color: ${COLORS.LOGAN};
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${COLORS.LOGAN};
  }
`

const Label = styled.label`
  font-weight: 200;
  font-size: 18px;
  text-align: center;
  color: ${COLORS.DARK_GRAY};
  margin-bottom: 2rem;
  width: 100%;
`

export { StyledInput, Label }
