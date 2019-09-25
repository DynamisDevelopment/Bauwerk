module.exports = {
    siteMetadata: {
        title: "Bauwerk",
        author: "Dynamis Development"
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plgins: [
                    'gatsby-remark-relative-images',
                    'gatsby-remark-images'
                ]
            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID, //from env.development
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Bauwerk",
                short_name: "Bauwerk",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                display: "standalone",
                icon: "src/images/favicon.ico",
                crossOrigin: `use-credentials`,
            },
        }
    ]
}