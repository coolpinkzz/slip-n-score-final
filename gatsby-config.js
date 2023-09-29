/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Slip N Score Soap Football`,
        siteUrl: `https://www.slipnscore.in`,
        image: `./static/logo.png`,
        description: `Slip N Score are your ultimate destination for an unforgettable fusion of football and slipperiness. Our one-of-a-kind arena invites thrill-seekers, sports enthusiasts, and anyone up for a unique adventure to experience the joy of football on a soapy stage. Our Arena: Step into our vibrant, action-packed arena where the rules of the game are simple: Slip, slide, score! Our specially designed, soapy surface promises endless hours of laughter, challenge, and excitement.`,

    },
    plugins: ["gatsby-plugin-sitemap", "gatsby-plugin-theme-ui", `gatsby-plugin-image`, 'gatsby-plugin-robots-txt',
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        }, "gatsby-transformer-remark", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-plugin-theme-ui`,
            options: {
                preset: "@theme-ui/preset-funk",
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `'Architects Daughter', cursive`,
                        file: `https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap`,
                    },
                    {
                        name: `Bubblegum Sans', cursive`,
                        file: `https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap`,
                    },
                    {
                        name: `'Roboto Slab', serif`,
                        file: `https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&display=swap`
                    }
                ],
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-8Q1WHL6H48", // Google Analytics / GA
                    "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                    // Defaults to https://www.googletagmanager.com
                    origin: "YOUR_SELF_HOSTED_ORIGIN",
                    // Delays processing pageview events on route update (in milliseconds)
                    delayOnRouteUpdate: 0,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.slipnscore.in',
                sitemap: 'https://www.slipnscore.in/sitemap.xml',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
    ]
};