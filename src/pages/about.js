import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"
import About from "../components/about/about"
import Specializations from "../components/specializations/specializations"
import Team from "../components/team/team"
import Contact from "../components/contact/contact"
import MediaBar from "../components/mediaBar/mediaBar"
const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <div className="grid">
                <About />
                <MediaBar />
                <Specializations />
                <Contact />
            </div>
        </Layout>
    )
}

export default AboutPage