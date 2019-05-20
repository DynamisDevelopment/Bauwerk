import React, { useState } from 'react'
// import { Link } from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"
import "../styles/index.sass"
import "./home.sass"
import Slider from "react-slick"
import { useSpring, animated } from 'react-spring'

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
            <div className="jumbotron-info">  {/*Goes over SlideShow*/}
                <h1>Architecture</h1>
                <h1>and Interior Design</h1>
                <h3>Professional buro with many years of experience, develop the most daring and audacious projects.</h3>
                <button className="more-btn">View Portfolio</button>
            </div>
            <div className="wrapper">
                <Slider {...settings} className="jumbotron-slider">
                    <div>
                        <img src="./Assets/images/header-background.png" alt="" />
                    </div>
                    <div>
                        <img src="./Assets/images/header-background.png" alt="" />
                    </div>
                    <div>
                        <img src="./Assets/images/header-background.png" alt="" />
                    </div>
                    <div>
                        <img src="./Assets/images/header-background.png" alt="" />
                    </div>
                </Slider>
                <div className="media-sidebar">
                    <a href="#" className="icons">
                        <img src="./Assets/icons/social/instagram.svg" alt="Instagram logo" />
                        <h3>Instagram</h3>
                    </a>
                    <a href="#" className="icons">
                        <img src="./Assets/icons/social/facebook.svg" alt="Facebook logo" />
                        <h3>facebook</h3>
                    </a>
                    <a href="#" className="icons">
                        <img src="./Assets/icons/social/twitter.svg" alt="Twitter logo" />
                        <h3>Twitter</h3>
                    </a>
                    <a href="#" className="icons">
                        <img src="./Assets/icons/social/behance.svg" alt="Behance logo" />
                        <h3>Behance</h3>
                    </a>
                </div>
            </div>

            <div className="grid">
                <div className="more-offers">
                    <div className="offer">
                        <img src="./Assets/icons/security.svg" alt="" />
                        <a href="#">
                            <h2>Exclusive 10 year warranty</h2>
                            <p>What's included</p>
                        </a>
                    </div>
                    <div className="offer">
                        <img src="./Assets/icons/armchair.svg" alt="" />
                        <a href="#">
                            <h2>Modern interior projects</h2>
                            <p>See our works</p>
                        </a>
                    </div>
                    <div className="offer">
                        <img src="./Assets/icons/blueprint.svg" alt="" />
                        <a href="#">
                            <h2>Get a personal estimate</h2>
                            <p>Fill the form</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="section-title">
                    <h1>Services <div className="line"></div></h1>
                    <h3>Our Professional</h3>
                    <h3>Specializations</h3>
                </div>
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