import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"

const BlogSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="blog-section">
            <SectionTitle section={"Blog"} title={"Blog"} subtitle={"and News"} />
            <Slider {...settings} slidesPerRow={3} className="blog-slider">

            </Slider>
        </div>
    )
}

export default BlogSlider
