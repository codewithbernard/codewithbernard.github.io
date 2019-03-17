import styled from "styled-components"
import * as COLORS from "@constants/colors"

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1025px) {
    justify-content: space-between;
  }
`

const Introduction = styled.div`
  button:not(:last-child) {
    margin-right: 1rem;
  }
`

const Image = styled.div`
  display: none;

  @media (min-width: 1025px) {
    display: initial;
    background-color: ${COLORS.WHITE};
    border-radius: 50%;
    box-shadow: 0px 30px 120px rgba(207, 207, 207, 0.5);
    width: 317px;
    height: 317px;
    position: relative;

    img {
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`

const SocialsSection = styled.section`
  margin-top: 3rem;

  @media (min-width: 481px) and (max-width: 767px) {
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    margin-top: 5rem;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) {
    margin-top: 2rem;
    justify-content: start;
  }
`

export { Section, Introduction, Image, SocialsSection, Buttons }
