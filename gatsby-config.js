module.exports = {
  siteMetadata: {
    title: 'Vincent Vella',
    author: 'Vincent Vella',
    description: 'A website depicting my strengths',
    bio: 'Javascript Developer specializing in React & React Native Applications',
    twitter: '@coding_all_day',
    github: '@vincentvella'
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
