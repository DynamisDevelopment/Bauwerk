// External Imports
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Slider from "react-slick"
// Styles
import "../styles/index.sass"
// import "./home.sass"

//Components
import Layout from "../components/layout"
import Head from "../components/head"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import Partners from "../components/partners/partners"
import Contact from "../components/contact/contact"

// Sections
import Jumbotron from "../sections/home/jumbotron/jumbotron"
import Offers from "../sections/home/offers/offers"


const IndexPage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Layout>
            <Head title="Home" />
            <Jumbotron />
            <Offers />

            <div className="grid">
                <SectionTitle section={"Services"} title={"Our Professional"} subtitle={"Specializations"} />
                <Slider {...settings} slidesPerRow={4} className="standard-slider">
                    <a href="#" className="section one">
                        <img src="./Assets/images/header-background.png" alt="" />
                        <div className="text-wrapper">
                            <h2>Architecture</h2>
                            <h2>Design</h2>
                            <p>Read more</p>
                        </div>
                    </a>
                    <a href="#" className="section two">
                        <img src="./Assets/images/header-background.png" alt="" />
                        <div className="text-wrapper">
                            <h2>Architecture</h2>
                            <h2>Design</h2>
                            <p>Read more</p>
                        </div>
                    </a>
                    <a href="#" className="section">
                        <img src="./Assets/images/header-background.png" alt="" />
                        <div className="text-wrapper">
                            <h2>Architecture</h2>
                            <h2>Design</h2>
                            <p>Read more</p>
                        </div>
                    </a>
                    <a href="#" className="section">
                        <img src="./Assets/images/header-background.png" alt="" />
                        <div className="text-wrapper">
                            <h2>Architecture</h2>
                            <h2>Design</h2>
                            <p>Read more</p>
                        </div>
                    </a>
                    <a href="#" className="section">
                        <img src="./Assets/images/header-background.png" alt="" />
                        <div className="text-wrapper">
                            <h2>Architecture</h2>
                            <h2>Design</h2>
                            <p>Read more</p>
                        </div>
                    </a>
                    <a href="#" className="section">
                        <img src="./Assets/images/header-background.png" alt="" />
                        <div className="text-wrapper">
                            <h2>Architecture</h2>
                            <h2>Design</h2>
                            <p>Read more</p>
                        </div>
                    </a>
                    <a href="#" className="section">
                        <img src="./Assets/images/header-background.png" alt="" />
                        <div className="text-wrapper">
                            <h2>Architecture</h2>
                            <h2>Design</h2>
                            <p>Read more</p>
                        </div>
                    </a>
                    <a href="#" className="section">
                        <img src="./Assets/images/header-background.png" alt="" />
                        <div className="text-wrapper">
                            <h2>Architecture</h2>
                            <h2>Design</h2>
                            <p>Read more</p>
                        </div>
                    </a>
                </Slider>
            </div>

            <div className="grid bg-white">
                <SectionTitle section={"Portfolio"} title={"Our Latest"} subtitle={"Projects"} />
            </div>
            <div className="grid">
                <SectionTitle section={"Testimonials"} title={"What"} subtitle={"Clients Say"} />
            </div>
            <div className="grid">
                <SectionTitle section={"About Us"} title={"Your Best"} subtitle={"Choice"} />
            </div>
            <div className="grid">
                <SectionTitle section={"Our Team"} title={"Our"} subtitle={"Professional Team"} />
            </div>
            <div className="grid">
                <Partners />
            </div>
            <div className="grid">
                <SectionTitle section={"Blog"} title={"Blog"} subtitle={"and News"} />
            </div>
            <div className="grid">
                <Contact />
            </div>
        </Layout>
    )
}

export default IndexPage