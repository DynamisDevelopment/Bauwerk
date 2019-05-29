import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"
import About from "../components/about/about"
import Specializations from "../components/specializations/specializations"
import Team from "../components/team/team"
import Contact from "../components/contact/contact"
import MediaBar from "../components/mediaBar/mediaBar"

// Styles 
import "../styles/_about.sass"

const AboutPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulPages(filter: {
            name: {
                eq: "about"
            }
            }) {
            edges {
                node {
                    name
                    sectionOne {
                        json
                    }
                    sectionTwo {
                        json
                    }
                    images {
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
            <Head title="About" />
            <div className="grid about-page">
                <About {...data.allContentfulPages.edges[0].node} />
                <MediaBar />
                <Specializations />
                <Team />
                <Contact />
            </div>
        </Layout>
    )
}

export default AboutPage