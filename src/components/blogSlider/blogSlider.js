import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"

const BlogSlider = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlog{
        edges {
            node {
                title 
                createdAt(formatString: "MMMM Do, YYYY") 
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
        slidesToScroll: 1,
        adaptiveHeight: true,
    }
    return (
        <div className="blog-section">
            <SectionTitle section={"Blog"} title={"Blog"} subtitle={"and News"} />
            <Slider {...settings} slidesPerRow={3} className="blog-slider">
                {data.allContentfulBlog.edges.map(edge => {
                    return <a href="#" className="blog-col">
                        <img src={edge.node.thumbnail.file.url} />
                        <p>{edge.node.createdAt}</p>
                        <h1>{edge.node.title}</h1>
                        <div className="read-more">Read more <img src="./Assets/images/arrow.svg" className="rarrow" /></div>
                    </a>
                })}
            </Slider>
        </div>
    )
}

export default BlogSlider
