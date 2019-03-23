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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bernard Bado, ReactJS Web Developer`,
        short_name: `Bernard Bado`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/original_face.png`,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@constants": path.resolve(__dirname, "src/constants"),
          "@UI": path.resolve(__dirname, "src/components/UI"),
          "@assets": path.resolve(__dirname, "src/assets"),
          "@theme": path.resolve(__dirname, "src/theme"),
        },
        extensions: ["js"],
      },
    },
  ],
}
