import React from 'react'
import Slider from "react-slick"
import { Link } from 'gatsby'
const Jumbotron = props => {
    var settings = {
        dots: true,
        lazyLoad: true,
        arrows: false,
        infinite: true,
        speed: 1200,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    console.log(props)
    return (
        <div className="jumbotron">
            <div className="jumbotron-info">
                <h1>Architecture</h1>
                <h1>and Interior Design</h1>
                <h3>Professional buro with many years of experience, develop the most daring and audacious projects.</h3>
                <Link to='/portfolio'><button className="more-btn">View Portfolio <img src="./Assets/images/arrow-white.svg" /></button></Link>
            </div>
            <Slider {...settings} className="jumbotron-slider">
                {props.jumbotronImages.map((image, index) => {
                    return <div key={index}>
                        <img src={image.file.url} />
                    </div>
                })}
            </Slider>
        </div>
    )
}
export default Jumbotron