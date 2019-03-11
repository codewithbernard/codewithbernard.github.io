import styled from "styled-components"
import * as COLORS from "@constants/colors"

const ClassicButton = styled.button`
  background-color: ${COLORS.MAYA_BLUE};
  border-radius: 25px;
  font-weight: 300;
  font-size: 18px;
  color: ${COLORS.WHITE};
  border: none;
  padding: 14px 35px;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  will-change: background-color, opacity;
  transition: background-color 0.3s, opacity 0.3s;
  font-family: Poppins;
  max-width: fit-content;
  z-index: 3;

  &:hover {
    background-color: ${COLORS.SUMMER_SKY};
  }

  &:focus {
    outline: none;
  }
`

const TransparentButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  font-weight: 300;
  font-size: 18px;
  color: ${COLORS.DARK_GRAY};
  border: none;
  cursor: pointer;
  will-change: color;
  transition: color 0.3s;
  font-family: Poppins;
  max-width: fit-content;
  z-index: 3;

  &:hover {
    color: ${COLORS.SUMMER_SKY};
  }

  &:focus {
    outline: none;
  }
`

export { ClassicButton, TransparentButton }
