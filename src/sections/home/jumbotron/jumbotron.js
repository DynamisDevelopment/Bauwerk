import React from 'react'
import Slider from "react-slick"
import MediaBar from "../../../components/mediaBar/mediaBar"
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
                        <img src="./Assets/images/header-background.png" />
                    </div>
                    <div>
                        <img src="./Assets/images/header-background.png" />
                    </div>
                    <div>
                        <img src="./Assets/images/header-background.png" />
                    </div>
                    <div>
                        <img src="./Assets/images/header-background.png" />
                    </div>
                </Slider>
                <MediaBar />
            </div>
        </div>
    )
}
export default Jumbotron