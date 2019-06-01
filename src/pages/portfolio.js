import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

//Components
import Layout from "../components/layout"
import Head from "../components/head"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import Projects from "../components/projects/projects"
import MediaBar from "../components/mediaBar/mediaBar"

// Styles 
import "../styles/_portfolio.sass"

const PortfolioPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulProjects(limit: 8){
            edges {
                node {
                    name
                    category 
                    slug
                    thumbnail {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
    `)
    return (
        <Layout>
            <Head title="Portfolio" />
            <div className="grid portfolio-page">
                <SectionTitle section={"Portfolio"} title={"Our Latest"} subtitle={"Projects"} />
                <Projects {...data.allContentfulProjects} />
                <MediaBar />
            </div>
        </Layout>
    )
}

export default PortfolioPage