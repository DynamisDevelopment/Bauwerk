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
                <Special />
                <Reviews />
                <About />
                <Team />>
                <Partners />
                <BlogSlider />
                <Contact />
            </div>
        </Layout>
    )
}

export default IndexPage