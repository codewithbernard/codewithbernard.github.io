import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "@components/Header"
import Footer from "@components/Footer"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  margin-top: 1rem;

  @media (min-width: 1025px) {
    margin-top: 3rem;
  }
`
