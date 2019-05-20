import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import "../../styles/index.sass"

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
            <footer>
            </footer>
        </div>
    )
}

export default Footer