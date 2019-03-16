import styled from "styled-components"

const Section = styled.section`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;

    @media (min-width: 768px) {
      padding: 0 15%;
    }

    @media (min-width: 1025px) {
      padding: 0 20%;
    }

    @media (min-width: 1281px) {
      padding: 0 25%;
    }

    h2,
    h3 {
      text-align: center !important;
    }

    button {
      margin-top: 1.5rem;
    }
  }
`

export { Section }
