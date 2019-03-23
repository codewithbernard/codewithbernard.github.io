import styled from "styled-components"
import * as COLORS from "@constants/colors"

const Aside = styled.aside`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 275px;
  z-index: 4;
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  transition: transform 0.5s;
  transform: translateX(${props => (props.open ? "0" : "275px")});

  @media (min-width: 1025px) {
    display: none;
  }
`

const AsideCover = styled.div`
  display: ${props => (props.open ? "initial" : "none")};
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${COLORS.BLACK_TRANSPARENT};
  z-index: 3;
`

const ButtonCollapse = styled.button`
  width: fit-content;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 32px;
  right: 20px;
  z-index: 2;

  &:focus {
    outline: none;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`

const Nav = styled.nav`
  ul {
    list-style: none;

    li {
        margin-bottom: 1rem;
    }

    a {
        color: ${COLORS.LOGAN};
        will-change: color;
        transition: color 0.3s;
        font-weight: 300;
        font-size: 20px;

        &:hover {
          color: ${COLORS.BLACK};
        }

        &.active {
          color: ${COLORS.SUMMER_SKY};
        }
  }
`

export { Aside, AsideCover, ButtonCollapse, Nav }
