/** @jsx jsx */
import {jsx} from "theme-ui"
import * as React from "react"
import {Header} from "../components/Header"
import {Hero} from "../components/Hero"
import {Price} from "../components/Price"
import {Location} from "../components/Loaction"
import {About, RulesRegulation} from "../components/RulesAndRegulation"
import {WhatWeOffer} from "../components/WhatWeOffer"
import {Card} from "../components/Card"
import {SoapFootballRules} from "../components/SoapFootballRules"
import {Footer} from "../components/Footer"
import Layout from "../components/layout"
import {SEO} from "../utils/constant"
import {Script} from "gatsby"
import {YoutubeVideo} from "../components/YotubeVideos"



const headingAccentStyles = {
    color: "#663399",
}
const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}
const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
}
const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
}

const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
}

const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    marginBottom: 24,
}

const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
}

const docLink = {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
    color: "#8954A8",
}

const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
}

const IndexPage = () => {
    React.useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', process.env.GA_ANALYTIC_TRACKING_ID);
    }, [])
    console.log(process.env.GA_ANALYTIC_TRACKING_ID, 'dsdsdsdsd');

    return (
        <Layout sx={{backgroundColor: 'background'}}>
            <Header />
            <Hero />
            <Price />
            <YoutubeVideo />
            <WhatWeOffer />
            <RulesRegulation />
            <Location />
            <Footer />

            {/*<h1 >
                Congratulations
                <br />
                <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
            </h1>
            <p style={paragraphStyles}>
                Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
                update in real-time. 😎
            </p>
            <ul style={listStyles}>
                <li style={docLinkStyle}>
                    <a
                        style={linkStyle}
                        href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                    >
                        {docLink.text}
                    </a>
                </li>
                {links.map(link => (
                    <li key={link.url} style={{...listItemStyles, color: link.color}}>
                        <span>
                            <a
                                style={linkStyle}
                                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                            >
                                {link.text}
                            </a>
                            {link.badge && (
                                <span style={badgeStyle} aria-label="New Badge">
                                    NEW!
                                </span>
                            )}
                            <p style={descriptionStyle}>{link.description}</p>
                        </span>
                    </li>
                ))}
            </ul>
            <img
                alt="Gatsby G Logo"
                src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
            <button sx={{variant: `buttons.info`}}>Click me</button>*/}
        </Layout>
    )
}

export default IndexPage

export const Head = () => (
    <>
        <title>{SEO?.HOME?.title}</title>
        <meta name="description" content={SEO?.HOME?.description} />
        <meta name="image" content='https://ik.imagekit.io/slipnscore/logo.png?updatedAt=1695708043285' />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8Q1WHL6H48"></Script>

    </>
) 
