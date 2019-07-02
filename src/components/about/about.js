import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"
import Icons from "../socialIcons/socialIcons"

const About = props => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          title
        }
      }
    }
    `)
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4500
    }
    return (
        <div className="about-section grid">
            <img src="../Assets/images/about-bg.jpg" className="about-bg" />
            <SectionTitle section={"About Us"} title={"Your Best"} subtitle={"Choice"} />
            <div className="about-row">
                <div className="about-column">
                    <Link to="/" className="logo-area">
                        <img src="../Assets/icons/logo.svg" />
                        <div className="name">
                            <h1>{data.site.siteMetadata.title}</h1>
                            <h3>Architecture</h3>
                            <h3>Buro</h3>
                        </div>
                    </Link>
                    {documentToReactComponents(props.sectionOne.json)}
                </div>
                <Slider {...settings} className="about-slider">
                    {props.aboutImages.map((edge, index) => {
                        return <div key={index}>
                            <img src={edge.file.url} />
                        </div>
                    })}
                </Slider>
            </div>
            {props.yearsOfWork & props.completedWorks && <div className="history">
                <div className="years">
                    <img src="../Assets/images/triangle.svg" alt="triangle" className="triangle" />
                    <div className="num">{props.yearsOfWork}</div>
                    <div className="type">years of professional work</div>
                </div>
                <div className="completedWorks">
                    <img src="../Assets/images/square.svg" alt="square" className="square" />
                    <div className="num">{props.completedWorks}</div>
                    <div className="type">successfully completed works</div>
                </div>
            </div>}
            {props.sectionTwo && <div className="about-row-2">
                <Slider {...settings} className="about-slider">
                    {props.aboutImages2.map((edge, index) => {
                        return <div key={index}>
                            <img src={edge.file.url} />
                        </div>
                    })}
                </Slider>
                <div className="about-column">
                    <h2>Our main goal is to combine our professionalism with the clients desire.</h2>
                    {documentToReactComponents(props.sectionTwo.json)}
                </div>
            </div>}
        </div>
    )
}

export default About