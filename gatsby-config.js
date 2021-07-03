require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  });
  
module.exports = {
    siteMetadata: {
        title: "Impulsiona Seguidores",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
                head: true
            }
        },
        `gatsby-plugin-emotion`,
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-source-wordpress`,
            options: {
              url: `http://impulsionacms.articadev.com/graphql`,
            },
            includedRoutes: [
                "**/paginas"
            ],
        }
    ],
};
