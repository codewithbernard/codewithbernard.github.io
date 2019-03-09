import styled from "styled-components"
import * as COLORS from "@constants/colors"

const Nav = styled.nav`
  display: none;

  @media screen and (min-device-width: 1200px) {
    display: initial;

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
  }
`

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media screen and (min-device-width: 1200px) {
    justify-content: space-between;
    margin-top: 2.5rem;
  }
`

export { Nav, StyledHeader }
