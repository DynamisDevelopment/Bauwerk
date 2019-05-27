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
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }
    return (
        <div className="blog-section">
            <SectionTitle section={"Blog"} title={"Blog"} subtitle={"and News"} />
            <Slider {...settings} className="blog-slider">
                {data.allContentfulBlog.edges.map((edge, index) => {
                    return <a href={"blog/" + edge.node.slug} className="blog-col" key={index}>
                        <img src={edge.node.thumbnail.file.url} />
                        <p>{edge.node.createdAt}</p>
                        <h1>{edge.node.title}</h1>
                        <div className="read-more">Read more <img src="../Assets/images/arrow.svg" className="rarrow" /></div>
                    </a>
                })}
            </Slider>
        </div>
    )
}

export default BlogSlider
