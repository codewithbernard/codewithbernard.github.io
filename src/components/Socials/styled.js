import styled, { keyframes } from "styled-components"
import { DARK_GRAY, MAYA_BLUE } from "@constants/colors"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const StyledIcon = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;

  &:hover {
    p {
      color: ${MAYA_BLUE};
    }

    svg {
      transform: scale(1.5);
      fill: ${MAYA_BLUE};
    }
  }

  svg {
    will-change: fill, transform;
    transition: fill 0.3s, transform 0.3s;
    fill: ${DARK_GRAY};
  }

  p {
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: ${DARK_GRAY};
    will-change: color;
    transition: color 0.3s;
  }
`

const StyledSocials = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding: 0;
  }
`

const StyledMobile = styled.div`
  display: block;
  animation: ${fadeIn} 2s;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export { StyledIcon, StyledSocials, StyledMobile }
