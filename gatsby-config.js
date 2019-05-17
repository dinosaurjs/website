module.exports = {
  siteMetadata: {
    title: `DinosaurJS Website`,
    description: `DinosaurJS is a non-profit, community-driven JavaScript and Open Web conference in Denver, Colorado. DinosaurJS is part of the JSConf Family of Events.`,
    author: `@adagonese`,
    siteUrl: `https://dinosaurjs.org`,
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
        icon: `src/images/square-logo.png`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins']
        }
      }
    },
    {
    resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-social-cards`,
          // ...
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
