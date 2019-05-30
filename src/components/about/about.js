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
        adaptiveHeight: true
    }
    return (
        <div className="about-section grid">
            <img src="../Assets/images/about-background.png" className="about-bg" />
            <SectionTitle section={"About Us"} title={"Your Best"} subtitle={"Choice"} />
            <div className="about-row">
                <div className="about-column">
                    <Link to="/" className="logo-area">
                        <img src="../Assets/icons/logo.png" />
                        <div className="name">
                            <h1>{data.site.siteMetadata.title}</h1>
                            <h3>Architecture</h3>
                            <h3>Buro</h3>
                        </div>
                    </Link>
                    {documentToReactComponents(props.sectionOne.json)}
                </div>
                <Slider {...settings} className="about-slider">
                    {props.images.map((edge, index) => {
                        return <div key={index}>
                            <img src={edge.file.url} />
                        </div>
                    })}
                </Slider>
            </div>
            <div className="history">
                <img src="../Assets/images/15Years.svg" className="years" />
                <img src="../Assets/images/completedWorks.svg" className="completedWorks" />
            </div>
            {props.sectionTwo && <div className="about-row-2">
                <Slider {...settings} className="about-slider">
                    {props.images.map((edge, index) => {
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