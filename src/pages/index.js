// External Imports
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Slider from "react-slick"
// Styles
import "../styles/index.sass"


//Components
import Layout from "../components/layout"
import Head from "../components/head"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import Specializations from "../components/specializations/specializations"
import Projects from "../components/projects/projects"
import About from "../components/about/about"
import Reviews from "../components/reviews/reviews"
import Team from "../components/team/team"
import BlogSlider from "../components/blogSlider/blogSlider"
import Contact from "../components/contact/contact"

// Sections
import Jumbotron from "../sections/home/jumbotron/jumbotron"
import Offers from "../sections/home/offers/offers"
import Special from "../sections/home/specialOffer/special"


const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <Jumbotron />
            <Offers />

            <div className="grid">
                <Specializations />
                <Projects />
                <Special />
                <Reviews />
                <About />
                <Team />
                <BlogSlider />
                <Contact />
            </div>
        </Layout>
    )
}

export default IndexPage