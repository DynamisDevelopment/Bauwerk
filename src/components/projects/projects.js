import React from 'react'
import SectionTitle from "../sectionTitle/sectionTitle"
import { Link } from "gatsby"
import Slider from "react-slick"

const Projects = props => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesPerRow: 1,
        slidesToScroll: 1
    }
    console.log(props)
    return (
        <div className="projects-section">
            <SectionTitle section={"Portfolio"} title={"Our Latest"} subtitle={"Projects"} />
            <div className="projects projects-grid">
                {props.edges.map((edge, index) => {
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
                {props.edges.map((edge, index) => {
                    return <a href={"projects/" + edge.node.slug} className="project" key={index}>
                        <img src={edge.node.thumbnail.file.url} />
                        <div className="text-wrapper">
                            <p>{edge.node.category}</p>
                            <h1>{edge.node.name}</h1>
                        </div>
                    </a>
                })}

            </Slider>
            <button className="more-btn"><Link to="/portfolio">View all works <img src="../Assets/images/arrow-white.svg" /></Link></button>
        </div>
    )
}

export default Projects