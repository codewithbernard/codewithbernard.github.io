import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

import Header from "@components/Header"
import Footer from "@components/Footer"
import Sidenav from "@components/Sidenav"
import { GlobalStyle } from "@theme"

const Layout = ({ location, children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Main>
      <TransitionProvider location={location} style={{ height: "100%" }}>
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    </Main>
    <Sidenav />
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
