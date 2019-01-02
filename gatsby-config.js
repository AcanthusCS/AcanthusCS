module.exports = {
  siteMetadata: {
    title: 'Acanthus Consulting Solutions',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `./src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#006600',
        theme_color: '#006600',
        display: 'minimal-ui',
        icon: 'src/images/icon2.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
