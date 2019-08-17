module.exports = {
  siteMetadata: {
    title: 'Zixia Lu',
    siteUrl: 'https://zixia.lu',
    description: 'Full-stack Developer',
    author: '@zixialu',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'zixia.lu',
        short_name: 'zixia.lu',
        description: 'Zixia Lu is a full-stack web developer.',
        lang: 'en',
        start_url: '/', // Entry point for PWA
        background_color: '#e54b4b', // Used on the splash screen on launch
        theme_color: '#e54b4b', // Toolbar colour
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
