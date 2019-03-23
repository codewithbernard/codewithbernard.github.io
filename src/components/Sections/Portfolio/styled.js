import styled from "styled-components"
import * as COLORS from "@constants/colors"

const Portfolios = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;

  @media (min-width: 1025px) {
    margin-top: 3rem;
  }
`

const StyledPortfolioItem = styled.div`
  position: relative;
  height: 200px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 100%;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ url }) => `url("${url}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    will-change: filter;
    transition: filter 0.3s;
  }

  a:first-child {
    margin-bottom: 1rem;
  }

  @media (max-width: 1025px) {
    a {
      opacity: 0;
      pointer-events: none;
    }

    &.active {
      &::before {
        filter: blur(2px) brightness(85%);
      }

      a {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  @media (min-width: 768px) {
    height: 272px;
    flex-basis: 45%;
  }

  @media (min-width: 1025px) {
    a {
      opacity: 0;
    }

    &:hover {
      &::before {
        filter: blur(2px) brightness(85%);
      }

      a {
        opacity: 1;
      }
    }
  }

  @media (min-width: 1281px) {
    flex-basis: 31%;
  }
`

const Link = styled.a`
  position: relative;
  background-color: ${COLORS.MAYA_BLUE};
  border-radius: 25px;
  text-decoration: none;
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

const EmptyItem = styled.div`
  flex-basis: 31%;
`

export { StyledPortfolioItem, Portfolios, EmptyItem, Link }
