import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import Projects from "../components/projects/projects"
import About from "../components/about/about"
import Specializations from "../components/specializations/specializations"
import Reviews from "../components/reviews/reviews"
import Contact from "../components/contact/contact"
import MediaBar from "../components/mediaBar/mediaBar"

const AboutMe = () => {
    return (
        <Layout>
            <div className="grid">
                <About />
                <MediaBar />
                <Reviews />
                <Specializations />
                <Projects />
                <Contact />
            </div>
        </Layout>
    )
}

export default AboutMe