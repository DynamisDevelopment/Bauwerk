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
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="specializations-section">
            <SectionTitle section={"Services"} title={"Our Professional"} subtitle={"Specializations"} />
            <Slider {...settings} slidesPerRow={4} className="services-slider">
                {data.allContentfulServices.edges.map((edge, index) => {
                    return <a href="#" key={index} className="service-column">
                        <img src={edge.node.thumbnail.file.url} />
                        <div className="text-wrapper">
                            <h2>{edge.node.title}</h2>
                            <p>Read more <img src="./Assets/images/arrow.svg" /></p>
                        </div>
                    </a>
                })}
            </Slider>
        </div>
    )
}

export default Specializations