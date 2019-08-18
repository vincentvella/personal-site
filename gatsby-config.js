module.exports = {
  siteMetadata: {
    title: 'Vincent Vella',
    description:
      'As a growing web and mobile developer I intend to use this site as a way to showcase my creations and experience as well as assisting with the creative process of others throughout the field.',
    url: 'https://vincentvella.me',
    image: '/pacalendar.jpg',
    twitterUsername: '@coding_all_day',
    githubUsername: '@vincentvella'
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vincent Vella`,
        short_name: `Vince Vella`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: 'data/assets/logo/Bottom Right Sloth.png'
      }
    },
    'gatsby-plugin-top-layout',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-material-ui'
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/data/assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/data/content/pages`
      }
    },
    'gatsby-transformer-remark'
  ]
};
