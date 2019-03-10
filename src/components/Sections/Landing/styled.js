import styled from "styled-components"
import * as COLORS from "@constants/colors"

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-device-width: 1200px) {
    justify-content: space-between;
  }
`

const Introduction = styled.div`
  h1,
  h2,
  h3 {
    text-align: center;
  }

  button:not(:last-child) {
    margin-right: 1rem;
  }

  h1 {
    font-weight: 300;
    font-size: 32px;
    color: ${COLORS.DARK_GRAY};
    padding: 0;
    margin: 0;
    margin-top: 1rem;
  }

  h2 {
    font-weight: 600;
    font-size: 32px;
    color: ${COLORS.DARK_GRAY};
    padding: 0;
    margin: 0;
    margin-top: 1rem;
  }

  h3 {
    font-weight: 300;
    font-size: 18px;
    color: ${COLORS.LOGAN};
  }

  @media screen and (min-device-width: 768px) {
    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 48px;
    }

    h3 {
      font-size: 24px;
    }
  }

  @media screen and (min-device-width: 1200px) {
    h1,
    h2,
    h3 {
      text-align: left;
    }
  }
`

const Image = styled.div`
  display: none;

  @media screen and (min-device-width: 1200px) {
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
  margin-top: auto;
  margin-bottom: 3rem;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-device-width: 1200px) {
    margin-top: 2rem;
    justify-content: start;
  }
`

export { Section, Introduction, Image, SocialsSection, Buttons }
