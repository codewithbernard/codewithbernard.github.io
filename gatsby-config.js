const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Bernard Bado`,
    description: `I am web developer. Using ReactJS to build modern websites.`,
    author: `@codewithbernard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@constants": path.resolve(__dirname, "src/constants"),
          "@UI": path.resolve(__dirname, "src/components/UI"),
          "@assets": path.resolve(__dirname, "src/assets"),
        },
        extensions: ["js"],
      },
    },
  ],
}
