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
                <SectionTitle />
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
                <div className="section-title">
                    <h1>Portfolio <div className="line"></div></h1>
                    <h3>Our Latest</h3>
                    <h3>Projects</h3>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage