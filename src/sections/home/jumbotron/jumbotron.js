import React from 'react'
import Slider from "react-slick"

const Jumbotron = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
            <div className="jumbotron-info">
                <h1>Architecture</h1>
                <h1>and Interior Design</h1>
                <h3>Professional buro with many years of experience, develop the most daring and audacious projects.</h3>
                <button className="more-btn">View Portfolio <img src="./Assets/images/arrow-white.svg" /></button>
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
        </div>
    )
}
export default Jumbotron