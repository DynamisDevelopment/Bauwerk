import React from 'react'
import Layout from "../components/layout"
import { graphql, useStaticQuery } from 'gatsby'
import Head from "../components/head"
import Projects from "../components/projects/projects"
import About from "../components/about/about"
import Specializations from "../components/specializations/specializations"
import Reviews from "../components/reviews/reviews"
import Contact from "../components/contact/contact"
import MediaBar from "../components/mediaBar/mediaBar"

// Styles 
import "../styles/_about.sass"
import "../styles/_about-template.sass"

const AboutMe = () => {
    const query = useStaticQuery(graphql`
    query {
        allContentfulTeam(filter: {slug: { eq: "folk" }}){
            edges {
                node {
                    name
                    slug
                    sectionOne {
                        json
                    }
                    images {
                        file {
                            url
                        }
                    }
                    details {
                        skills
                    }
                }
            }
        }
    }
`)
    return (
        <Layout>
            <div className="grid about-page">
                <About {...query.allContentfulTeam.edges[0].node} />
                <MediaBar />
                <div className="skills">
                    <img src={query.allContentfulTeam.edges[0].node.images[0].file.url} className="skill-img" />
                    <div className="skills-list">
                        <h1>My professional skills</h1>
                        <ul>
                            {query.allContentfulTeam.edges[0].node.details.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
                <Reviews />
                <Specializations />
                <Projects />
                <Contact />
            </div>
        </Layout>
    )
}

export default AboutMe