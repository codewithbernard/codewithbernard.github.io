import styled from "styled-components"
import * as COLORS from "@constants/colors"

const H1 = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 32px;
  color: ${COLORS.DARK_GRAY};
  padding: 0;
  margin: 0;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1025px) {
    text-align: left;
  }
`

const H2 = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 32px;
  color: ${COLORS.DARK_GRAY};
  padding: 0;
  margin: 0;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1025px) {
    text-align: left;
  }
`

const H3 = styled.h3`
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  color: ${COLORS.LOGAN};

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1025px) {
    text-align: left;
  }
`

export { H1, H2, H3 }
