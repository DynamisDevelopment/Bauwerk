import React from 'react'
import SectionTitle from "../sectionTitle/sectionTitle"
import { Link, graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulProjects {
            edges {
                node {
                    name
                    category 
                    slug
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
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesPerRow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="projects-section">
            <SectionTitle section={"Portfolio"} title={"Our Latest"} subtitle={"Projects"} />
            <div className="projects projects-grid">
                {data.allContentfulProjects.edges.map((edge, index) => {
                    return <a href={"projects/" + edge.node.slug} className="project" key={index}>
                        <img src={edge.node.thumbnail.file.url} />
                        <div className="text-wrapper">
                            <p>{edge.node.category}</p>
                            <h1>{edge.node.name}</h1>
                        </div>
                    </a>
                })}
            </div>
            <Slider {...settings} className="projects projects-slider">
                {data.allContentfulProjects.edges.map((edge, index) => {
                    return <a href={"projects/" + edge.node.slug} className="project" key={index}>
                        <img src={edge.node.thumbnail.file.url} />
                        <div className="text-wrapper">
                            <p>{edge.node.category}</p>
                            <h1>{edge.node.name}</h1>
                        </div>
                    </a>
                })}

            </Slider>
            <button className="more-btn"><a href="#">View all works <img src="../Assets/images/arrow-white.svg" /></a></button>
        </div>
    )
}

export default Projects