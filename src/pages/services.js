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

const ServicesPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Services" />
                <div className="grid">
                    <Contact />
                </div>
            </Layout>
        </div>
    )
}
export default ServicesPage