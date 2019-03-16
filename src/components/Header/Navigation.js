import React from "react"
import { Link } from "gatsby"

import { Nav } from "./styled"

const options = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
  { label: "About Me ", to: "/aboutme" },
]

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
