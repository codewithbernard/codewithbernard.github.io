import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import { Aside, AsideCover, ButtonCollapse, Nav } from "./styled"
import SVG from "@UI/SVG"
import options from "@constants/options"

const Sidenav = () => {
  const [open, setOpen] = useState(false)

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
    <Fragment>
      <Aside open={open}>
        <Nav>
          <ul>{renderOptions}</ul>
        </Nav>
      </Aside>
      <AsideCover onClick={() => setOpen(false)} open={open} />
      <ButtonCollapse onClick={() => setOpen(true)}>
        <SVG name="bars" />
      </ButtonCollapse>
    </Fragment>
  )
}

export default Sidenav
