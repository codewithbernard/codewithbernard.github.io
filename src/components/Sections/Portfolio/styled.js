import styled from "styled-components"

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
    flex-basis: 45%;
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

  @media (min-width: 1281px) {
    flex-basis: 31%;
  }
`

const EmptyItem = styled.div`
  flex-basis: 31%;
`

export { StyledPortfolioItem, Portfolios, EmptyItem }
