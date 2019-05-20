import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.sass'
const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)
    return (
        <div>
            <footer className={footerStyles.footer}>
            </footer>
        </div>
    )
}

export default Footer