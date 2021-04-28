/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
/* eslint-disable */
module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    'gatsby-plugin-no-javascript',
    {
      resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeReactHelmetAttrs: false,
        noInlineStyles: true,
        removeGatsbyAnnouncer: true,
        removeFocusWrapper: true,
        removePreloadLinks: true,
      },
    },
  ],
}
