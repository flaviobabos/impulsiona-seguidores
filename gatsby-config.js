module.exports = {
    siteMetadata: {
        title: "Impulsiona Seguidores",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
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
