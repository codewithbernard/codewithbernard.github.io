import React, { useState } from "react"

import { Portfolios, EmptyItem } from "./styled"
import { H2, H3 } from "@UI/Heading"
import PortfolioItem from "@components/Sections/Portfolio/PortfolioItem"

import firebase from "@assets/firebase.gif"
import elite from "@assets/elite.gif"
import emaily from "@assets/emaily.gif"

const portoflioitems = [
  {
    link: firebase,
    code: "https://github.com/codewithbernard/react-redux-firebase",
  },
  {
    link: elite,
    live: "https://elite-ranks.com/",
  },
  {
    link: emaily,
    live: "https://emaily-prod.herokuapp.com/surveys",
    code: "https://github.com/codewithbernard/emaily",
  },
]

const Portfolio = () => {
  const [active, setActive] = useState("")

  return (
    <section>
      <H2>My Portfolio</H2>
      <H3>Majority of the these web applications were developed using React</H3>
      <Portfolios>
        {portoflioitems.map(({ link, code, live }, index) => (
          <PortfolioItem
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
            key={index}
            url={link}
            code={code}
            live={live}
          />
        ))}
        {portoflioitems.length % 3 === 2 ? <EmptyItem /> : null}
      </Portfolios>
    </section>
  )
}

export default Portfolio
