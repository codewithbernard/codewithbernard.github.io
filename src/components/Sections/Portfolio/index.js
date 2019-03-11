import React from "react"

import { Section, Portfolios } from "./styled"
import { H2, H3 } from "@UI/Heading"
import PortfolioItem from "@components/Sections/Portfolio/PortfolioItem"

const Portfolio = () => {
  return (
    <Section>
      <H2>My Portfolio</H2>
      <H3>Majority of the these web applications were developed using React</H3>
      <Portfolios>
        <PortfolioItem url="http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg" />
        <PortfolioItem url="http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg" />
        <PortfolioItem url="http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg" />
        <PortfolioItem url="http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg" />
        <PortfolioItem url="http://www.hrinasia.com/wp-content/uploads/2016/01/project-management-6.jpg" />
      </Portfolios>
    </Section>
  )
}

export default Portfolio
