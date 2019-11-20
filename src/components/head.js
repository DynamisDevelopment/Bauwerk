import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery } from 'gatsby'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <div>
            <Helmet title={`${title} | ${data.site.siteMetadata.title}`} link={{ rel: "icon", type: "image/ico", href: '../images/favicon.ico' }} />
        </div>
    )
}

export default Head