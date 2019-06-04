import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Slider from "react-slick"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import SectionTitle from "../components/sectionTitle/sectionTitle"
import MediaBar from "../components/mediaBar/mediaBar"
import BlogSlider from "../components/blogSlider/blogSlider"
import Newsletter from "../components/newsletter/newsletter"
import Contact from "../components/contact/contact"
import Icons from "../components/socialIcons/socialIcons"

// Styles 
import "../styles/_project-template.sass"

export const projects = graphql`
    query($slug: String!) {
        contentfulProjects(slug: { eq: $slug}){
            name 
            category 
            createdAt(formatString: "MMMM Do, YYYY") 
            bgImage { file { url } }
            sliderImages {
                title
                file { url }
            }
            intro { json }
            sideImage { file { url } }
            bioSection1 { json }
            bioSection2 { json }
            details {
                cost 
                type 
                year 
                style 
                video 
                status 
                service 
                location
                reviews {
                    author 
                    content
                    createdAt
                }
            }
        }
    }
    `
const PortfolioCase = props => {
    const project = props.data.contentfulProjects

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    return (
        <Layout over={true}>
            <div className="grid">
                <img src={project.bgImage.file.url} className="project-bg" />
                <div className="project-veil"></div>
                <div className="portfolio-page">
                    <h4 className="path">Home / Blog list and news /  {project.name}</h4>
                    <SectionTitle section={"Portfolio"} title={""} subtitle={""} />
                    <h1 className="title">{project.name}</h1>
                    <div className="posted">
                        <h4>{project.category}</h4>
                        <h4>{project.createdAt}</h4>
                    </div>
                    <Slider {...settings} className="project-slider">
                        {project.sliderImages.map((image, index) => {
                            return <div className="post-image" key={index}>
                                <img src={image.file.url} />
                            </div>
                        })}
                    </Slider>
                    <div className="project-row">
                        <div className="project-column">
                            <div className="intro">{documentToReactComponents(project.intro.json)}</div>
                            <div className="content">{documentToReactComponents(project.bioSection1.json)}</div>
                        </div>
                        <div className="project-details">
                            <ul className="details">
                                <li><span>Project Cost: </span> ${project.details.cost}</li>
                                <li><span>Location: </span> {project.details.location}</li>
                                <li><span>Year: </span> {project.details.year}</li>
                                <li><span>Style: </span> {project.details.style}</li>
                                <li><span>Service: </span> {project.details.service}</li>
                                <li><span>Space Type: </span> {project.details.type}</li>
                                <li><span>Status: </span> {project.details.status}</li>
                                <button className="more-btn">Order the same <img src="../Assets/images/arrow-white.svg" /></button>
                            </ul>
                            <div className="share">
                                <h2>Share: </h2>
                                <Icons />
                            </div>
                        </div>
                    </div>
                    <div className="project-row">
                        <img src={project.sideImage.file.url} className="side-image" />
                        <div className="project-column">
                            <div className="content">{documentToReactComponents(project.bioSection2.json)}</div>
                        </div>
                    </div>
                    {project.details.video == "#" && <div className="project-video">
                        <SectionTitle section={""} title={"Short Video"} subtitle={"Of the Project"} />
                        <iframe src="https://www.youtube.com/embed/NpEaa2P7qZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>}
                    {project.details.reviews[0] && <div className="project-review">
                        <SectionTitle section={""} title={"Customer"} subtitle={"feedback"} />
                        <div className="quote">
                            <div className="review">
                                <img src="../Assets/icons/quotes.svg" />
                                <p>{project.details.reviews[0].content}</p>
                            </div>
                            <h2>{project.details.reviews[0].author}</h2>
                            <h4>{project.details.reviews[0].createdAt}</h4>
                        </div>
                    </div>}
                </div>
                <MediaBar />
                <BlogSlider />
                <Newsletter />
                <Contact />
            </div>
        </Layout>
    )
}

export default PortfolioCase