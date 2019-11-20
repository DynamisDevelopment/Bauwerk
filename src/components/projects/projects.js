import React from 'react'
import SectionTitle from "../sectionTitle/sectionTitle"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const Projects = props => {
    return (
        <div className="projects-section">
            <SectionTitle section={"Portfolio"} title={props.whos + " Latest"} subtitle={"Projects"} />
            <div className="projects projects-grid">
                {props.edges.map((edge, index) => {
                    return <Link to={"projects/" + edge.node.slug} className="project" key={index}>
                        <img src={edge.node.thumbnail.file.url} />
                        <div className="projects-text-wrapper">
                            <p>{edge.node.category}</p>
                            <h1>{edge.node.name}</h1>
                        </div>
                    </Link>
                })}
            </div>
            <button className="more-btn"><Link to="/portfolio">View all works <img src="../Assets/images/arrow-white.svg" /></Link></button>
        </div>
    )
}

export default Projects