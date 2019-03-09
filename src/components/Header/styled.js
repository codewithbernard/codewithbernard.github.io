import styled from "styled-components"
import * as COLORS from "@constants/colors"

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      &:not(:last-child) {
        margin-right: 50px;
      }

      a {
        color: ${COLORS.LOGAN};
        will-change: color;
        transition: color 0.3s;
        font-weight: 300;
        font-size: 18px;

        &:hover {
          color: ${COLORS.BLACK};
        }
      }
    }
  }
`

const H2 = styled.h2`
  font-family: Poppins;
  font-weight: 600;
  font-size: 48px;
  color: ${COLORS.DARK_GRAY};
`

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`

export { Nav, H2, StyledHeader }
