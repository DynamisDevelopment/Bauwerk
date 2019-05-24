import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"


const Team = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulTeam {
            edges {
                node {
                    name 
                    position 
                    image {
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
        slidesToScroll: 1
    }
    return (
        <div className="team-section">
            <SectionTitle section={"Our Team"} title={"Our"} subtitle={"Professional Team"} />
            <Slider {...settings} className="team-slider">
                {data.allContentfulTeam.edges.map((edge, index) => {
                    return <div key={index}>
                        <img src={edge.node.image.file.url} />
                        <div className="text-wrapper">
                            <h2>{edge.node.name}</h2>
                            <p>{edge.node.position}</p>
                        </div>
                    </div>

                })}

            </Slider>
        </div>
    )
}

export default Team