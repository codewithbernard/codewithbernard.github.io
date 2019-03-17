import React from "react"

import { Portfolios, EmptyItem } from "./styled"
import { H2, H3 } from "@UI/Heading"
import PortfolioItem from "@components/Sections/Portfolio/PortfolioItem"

const portoflioitems = [
  {
    link:
      "http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg",
  },
  {
    link:
      "http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg",
  },
  {
    link:
      "http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg",
  },
  {
    link:
      "http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg",
  },
  {
    link:
      "http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg",
  },
]

const Portfolio = () => {
  return (
    <section>
      <H2>My Portfolio</H2>
      <H3>Majority of the these web applications were developed using React</H3>
      <Portfolios>
        {portoflioitems.map(({ link }, index) => (
          <PortfolioItem key={index} url={link} />
        ))}
        {portoflioitems.length % 3 === 2 ? <EmptyItem /> : null}
      </Portfolios>
    </section>
  )
}

export default Portfolio
