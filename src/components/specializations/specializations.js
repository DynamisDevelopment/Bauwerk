import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"

const Specializations = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulServices {
            edges {
                node {
                    title
                    thumbnail {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
    `)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]
    }
    return (
        <div className="specializations-section">
            <SectionTitle section={"Services"} title={"Our Professional"} subtitle={"Specializations"} />
            <Slider {...settings} className="services-slider">
                {data.allContentfulServices.edges.map((edge, index) => {
                    return <a href="/services" key={index} className="service-column">
                        <img src={edge.node.thumbnail.file.url} />
                        <div className="text-wrapper">
                            <h2>{edge.node.title}</h2>
                            <p>Read more <img src="../Assets/images/arrow.svg" /></p>
                        </div>
                    </a>
                })}
            </Slider>
        </div>
    )
}

export default Specializations