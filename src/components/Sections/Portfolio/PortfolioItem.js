import React from "react"
import PropTypes from "prop-types"

import { StyledPortfolioItem, Link } from "./styled"

const PortfolioItem = ({ url, live, code, onClick, className }) => {
  return (
    <StyledPortfolioItem className={className} onClick={onClick} url={url}>
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
  onClick: PropTypes.func,
  className: PropTypes.string,
}

PortfolioItem.defaultProps = {
  live: "",
  code: "",
  onClick: () => null,
  className: "",
}

export default PortfolioItem
