import React from 'react'
import Layout from "../components/layout"
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import Projects from "../components/projects/projects"
import About from "../components/about/about"
import Specializations from "../components/specializations/specializations"
import Reviews from "../components/reviews/reviews"
import Contact from "../components/contact/contact"
import MediaBar from "../components/mediaBar/mediaBar"
import Awards from "../components/awards/awards"

// Styles 
import "../styles/_about.sass"
import "../styles/_about-template.sass"

const AboutMe = () => {
    const query = useStaticQuery(graphql`
    query {
        allContentfulTeam(filter: {slug: { eq: "pablo" }}){
            edges {
                node {
                    name
                    slug
                    sectionOne {
                        json
                    }
                    aboutImages {
                        file {
                            url
                        }
                    }
                    details {
                        skills
                    }
                    awards {
                        title
                        file {
                            url
                        }
                    }   
                }
            }
        }
        allContentfulProjects(filter: {contributor: { elemMatch: { slug: { eq: "pablo"}} }}){
            edges {
                node {       
                    name 
                    category
                    thumbnail {
                        file {
                            url
                        }
                    }
                }
            }
        }
        allContentfulReviews(filter: {reviewie: { elemMatch: { slug: { eq: "pablo"}} }}) {
            edges {
                node {
                    createdAt(formatString: "MMMM Do, YYYY") 
                    name 
                    reviewContent{
                         json
                    }
                    avatar {
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
            <Helmet title={`About | ${query.allContentfulTeam.edges[0].node.name}`} />
            <div className="grid about-page">
                <About {...query.allContentfulTeam.edges[0].node} />
                <MediaBar />
                <div className="skills">
                    <img src={query.allContentfulTeam.edges[0].node.aboutImages[0].file.url} className="skill-img" />
                    <div className="skills-list">
                        <h1>My professional skills</h1>
                        <ul>
                            {query.allContentfulTeam.edges[0].node.details.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
                <Awards {...query.allContentfulTeam.edges[0].node} whos={"My"} />
                <Reviews {...query.allContentfulReviews} />
                <Specializations />
                <Projects {...query.allContentfulProjects} />
                <Contact />
            </div>
        </Layout>
    )
}

export default AboutMe