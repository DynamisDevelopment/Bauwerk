import React from 'react'

//Components
import Layout from "../components/layout"
import Head from "../components/head"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import Projects from "../components/projects/projects"
import About from "../components/about/about"
import Reviews from "../components/reviews/reviews"
import Team from "../components/team/team"
import BlogSlider from "../components/blogSlider/blogSlider"
import Contact from "../components/contact/contact"
import MediaBar from "../components/mediaBar/mediaBar"

// Styles 
import "../styles/_portfolio.sass"
const PortfolioPage = () => {
    return (
        <Layout>
            <Head title="Portfolio" />
            <div className="grid portfolio-page">
                <SectionTitle section={"Portfolio"} title={"Our Latest"} subtitle={"Projects"} />
                <Projects />
                <MediaBar />
                <Projects />
            </div>
        </Layout>
    )
}

export default PortfolioPage