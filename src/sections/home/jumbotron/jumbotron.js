import React from 'react'
import Slider from "react-slick"
import { Link } from 'gatsby'

const Jumbotron = () => {
    var settings = {
        dots: true,
        lazyLoad: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="jumbotron">
            <div className="jumbotron-info">
                <h1>Architecture</h1>
                <h1>and Interior Design</h1>
                <h3>Professional buro with many years of experience, develop the most daring and audacious projects.</h3>
                <Link to='/portfolio'><button className="more-btn">View Portfolio <img src="./Assets/images/arrow-white.svg" alt="white arrow" /></button></Link>
            </div>
            <Slider {...settings} className="jumbotron-slider">
                <picture>
                    <source media="(max-width: 450px)" srcset="./Assets/images/jumbotron/pic2-sm.jpg" />
                    <source media="(max-width: 1000px)" srcset="./Assets/images/jumbotron/pic2-m.jpg" />
                    <source media="(min-width: 1001px)" srcset="./Assets/images/jumbotron/pic2-lg.jpg" />
                    <img src="../Assets/images/jumbotron/pic2-lg.jpg" alt="" />
                </picture>
                <picture>
                    <source media="(max-width: 450px)" srcset="./Assets/images/jumbotron/pic3-sm.jpg" />
                    <source media="(max-width: 1000px)" srcset="./Assets/images/jumbotron/pic3-m.jpg" />
                    <source media="(min-width: 1001px)" srcset="./Assets/images/jumbotron/pic3-lg.jpg" />
                    <img src="..//Assets/images/jumbotron/pic3-lg.jpg" alt="" />
                </picture>
                <picture>
                    <source media="(max-width: 450px)" srcset="./Assets/images/jumbotron/pic1-sm.jpg" />
                    <source media="(max-width: 1000px)" srcset="./Assets/images/jumbotron/pic1-m.jpg" />
                    <source media="(min-width: 1001px)" srcset="./Assets/images/jumbotron/pic1-lg.jpg" />
                    <img src="../Assets/images/jumbotron/pic1-lg.jpg" alt="" />
                </picture>
                <picture>
                    <source media="(max-width: 450px)" srcset="./Assets/images/jumbotron/pic4-sm.jpg" />
                    <source media="(max-width: 1000px)" srcset="./Assets/images/jumbotron/pic4-m.jpg" />
                    <source media="(min-width: 1001px)" srcset="./Assets/images/jumbotron/pic4-lg.jpg" />
                    <img src="../Assets/images/jumbotron/pic4-lg.jpg" alt="" />
                </picture>
            </Slider>
        </div>
    )
}
export default Jumbotron
