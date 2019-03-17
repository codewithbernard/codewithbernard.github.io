import styled, { css, keyframes } from "styled-components"
import * as COLORS from "@constants/colors"

const bubble = keyframes`
  from {
    transform: scaleX(1) scaleY(1);
    opacity: 1;
    border-width: 5px;
  }

  to {
    transform: scaleX(1.3) scaleY(1.7);
    opacity: 0;
    border-width: 5px;
  }
`

const ClassicButton = styled.button`
  position: relative;
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
  
  &::after {
    content: "";
    position: absolute;
    width: 93%;
    height: 82%;
    left: 0;
    top: 0;
    background-color: transparent;
    border-radius: inherit;
    z-index: 2;
    border: 0 solid ${COLORS.MAYA_BLUE};
    ${props =>
      props.animate &&
      css`
        animation: ${bubble} 1s 3 ease-in-out;
      `}
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
