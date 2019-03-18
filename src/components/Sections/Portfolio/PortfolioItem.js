import React from "react"
import PropTypes from "prop-types"

import { StyledPortfolioItem, Link } from "./styled"

const PortfolioItem = ({ url, live, code }) => {
  return (
    <StyledPortfolioItem url={url}>
      {live && (
        <Link target="_blank" href={live}>
          Live demo
        </Link>
      )}
      {code && (
        <Link target="_blank" href={code}>
          Code
        </Link>
      )}
    </StyledPortfolioItem>
  )
}

PortfolioItem.propTypes = {
  url: PropTypes.string.isRequired,
  live: PropTypes.string,
  code: PropTypes.string,
}

PortfolioItem.defaultProps = {
  live: "",
  code: "",
}

export default PortfolioItem
