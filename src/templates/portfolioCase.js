import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from 'gatsby'
import MediaBar from "../components/mediaBar/mediaBar"
import BlogSlider from "../components/blogSlider/blogSlider"
import Newsletter from "../components/newsletter/newsletter"
import Contact from "../components/contact/contact"

// Styles 
import "../styles/_post-template.sass"

const PortfolioCase = () => {
    return (
        <Layout>
            <div className="grid thing">
                <MediaBar />
                <BlogSlider />
                <Newsletter />
                <Contact />
            </div>
        </Layout>
    )
}

export default PortfolioCase