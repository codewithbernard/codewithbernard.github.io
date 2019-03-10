import React from "react"
import { Link } from "gatsby"

import { Nav } from "./styled"

const options = [
  { label: "Home", to: "home" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Contact", to: "contact" },
  { label: "About Me ", to: "aboutMe" },
]

const Navigation = () => {
  const renderOptions = options.map(({ to, label }) => {
    return (
      <li>
        <Link to={to}>{label}</Link>
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
