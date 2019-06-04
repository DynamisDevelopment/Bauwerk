import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
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

export const teams = graphql`
    query($slug: String!) {
        contentfulTeam(slug: { eq: $slug}){
            name
            slug
            sideImage { file { url } }
            sectionOne { json }
            aboutImages { file { url } }
            details { skills }
            awards {
                title
                file { url }
            }   
        }
        allContentfulProjects(filter: {contributor: { elemMatch: { slug: { eq: "webb"}} }} limit: 4){
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
        allContentfulReviews(filter: {reviewie: { elemMatch: { slug: { eq: "webb"}} }}) {
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
`

const AboutMe = props => {
    return (
        <Layout>
            <Helmet title={`About | ${props.data.contentfulTeam.name}`} />
            <div className="grid about-page">
                <About {...props.data.contentfulTeam} />
                <MediaBar />
                <div className="skills">
                    <img src={props.data.contentfulTeam.sideImage.file.url} className="skill-img" />
                    <div className="skills-list">
                        <h1>My professional skills</h1>
                        <ul>
                            {props.data.contentfulTeam.details.skills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
                <Awards {...props.data.contentfulTeam} whos={"My"} />
                <Reviews {...props.data.allContentfulReviews} />
                <Specializations />
                <Projects {...props.data.allContentfulProjects} who={"My"} />
                <Contact />
            </div>
        </Layout>
    )
}

export default AboutMe