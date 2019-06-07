// External Imports
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// Styles
import "../styles/index.sass"


//Components
import Layout from "../components/layout"
import Head from "../components/head"
import MediaBar from "../components/mediaBar/mediaBar"
import Specializations from "../components/specializations/specializations"
import Projects from "../components/projects/projects"
import About from "../components/about/about"
import Reviews from "../components/reviews/reviews"
import Team from "../components/team/team"
import Partners from "../components/partners/partners"
import BlogSlider from "../components/blogSlider/blogSlider"
import Contact from "../components/contact/contact"

// Sections
import Jumbotron from "../sections/home/jumbotron/jumbotron"
import Offers from "../sections/home/offers/offers"
import Special from "../sections/home/specialOffer/special"


const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulPages(filter: {
            name: {
                eq: "home"
            }
            }) {
            edges {
                node {
                    name
                    jumbotronImages { file { url } }
                    sectionOne { json }
                    sectionTwo { json }
                    aboutImages { file { url } }
                    aboutImages2 { file { url } }
                    yearsOfWork
                    completedWorks
                }
            }
        }
        allContentfulProjects(limit: 4){
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
        allContentfulReviews{
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
        allContentfulPartners {
            edges {
                node {
                    clientLogos{ file { url } }
                }
            }
        }
    }
    `)


    return (
        <Layout page={data.allContentfulPages.edges[0].node}>
            <Head title="Home" />
            <div className="grid">
                <Jumbotron {...data.allContentfulPages.edges[0].node} />
                <MediaBar />
                <Offers />
                <Specializations />
                <Projects {...data.allContentfulProjects} whos={"Our"} />
                <Special />
                <Reviews {...data.allContentfulReviews} />
                <About {...data.allContentfulPages.edges[0].node} />
                <Team />
                <Partners {...data.allContentfulPartners} />
                <BlogSlider />
                <Contact />
            </div>
        </Layout>
    )
}

export default IndexPage