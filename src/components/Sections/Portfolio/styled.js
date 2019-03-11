import styled from "styled-components"
import * as COLORS from "@constants/colors"

const Section = styled.section``

const Portfolios = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledPortfolioItem = styled.div`
  position: relative;
  height: 200px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 1 45%;
  margin-bottom: 2rem;

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
    will-change: filter;
    transition: filter 0.3s;
  }

  button:first-child {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    height: 272px;
  }

  @media (min-width: 1025px) {
    button {
      opacity: 0;
    }

    &:hover {
      &::before {
        filter: blur(2px) brightness(85%);
      }

      button {
        opacity: 1;
      }
    }
  }
`

export { Section, StyledPortfolioItem, Portfolios }
