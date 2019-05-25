import React from 'react'
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"

const Specializations = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="specializations-section">
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
    )
}

export default Specializations