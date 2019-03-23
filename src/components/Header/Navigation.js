import React from "react"
import { Link } from "gatsby"
import { Nav } from "./styled"

import options from "@constants/options"

const Navigation = () => {
  const renderOptions = options.map(({ to, label }) => {
    return (
      <li key={label}>
        <Link to={to} activeClassName="active">
          {label}
        </Link>
      </li>
    )
  })

  return (
    <Nav>
      <ul>{renderOptions}</ul>
    </Nav>
  )
}

export default Navigation
