import React from 'react'
import Slider from "react-slick"
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Jumbotron = () => {
    const data = useStaticQuery(graphql`
    query {
        image1: file(relativePath: {eq: "images/jumbotron/pic2-lg.jpg"}) {
            childImageSharp { fluid(quality: 100)  { ...GatsbyImageSharpFluid_withWebp } }
        }
        image2: file(relativePath: {eq: "images/jumbotron/pic1-lg.jpg"}) {
            childImageSharp { fluid(quality: 100)  { ...GatsbyImageSharpFluid_withWebp } }
        }
        image3: file(relativePath: {eq: "images/jumbotron/pic3-lg.jpg"}) {
            childImageSharp { fluid(quality: 100)  { ...GatsbyImageSharpFluid_withWebp } }
        }
        image4: file(relativePath: {eq: "images/jumbotron/pic4-lg.jpg"}) {
            childImageSharp { fluid(quality: 100)  { ...GatsbyImageSharpFluid_withWebp } }
        }
}
`)

    var settings = {
        dots: true,
        lazyLoad: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2500,
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
                <Img
                    fluid={data.image1.childImageSharp.fluid}
                    fadeIn={true}
                    loading={"eager"}
                    className='bg-image'
                />
                <Img
                    fluid={data.image2.childImageSharp.fluid}
                    fadeIn={true}
                    loading={"lazy"}
                    className='bg-image'
                />
                <Img
                    fluid={data.image3.childImageSharp.fluid}
                    fadeIn={true}
                    loading={"lazy"}
                    className='bg-image'
                />
                <Img
                    fluid={data.image4.childImageSharp.fluid}
                    fadeIn={true}
                    loading={"lazy"}
                    className='bg-image'
                />
            </Slider>
        </div>
    )
}
export default Jumbotron