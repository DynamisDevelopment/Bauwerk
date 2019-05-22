import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import SectionTitle from "../sectionTitle/sectionTitle"
import Slider from "react-slick"

const Reviews = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulReviews {
            edges {
                node {
                    createdAt(formatString: "MMMM Do, YYYY") 
                    name 
                    reviewContent{
                    reviewContent
                    }
                    avatar {
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="reviews-section">
            <SectionTitle section={"Testimonials"} title={"What"} subtitle={"Clients Say"} />
            <Slider {...settings} slidesPerRow={2} className="reviews-slider">
                {data.allContentfulReviews.edges.map(review => {
                    return <div className="review-col">
                        <img src={review.node.avatar.file.url} />
                        <h2>{review.node.reviewContent.reviewContent}</h2>
                        <p>{review.node.name}</p>
                        <p>{review.node.createdAt}</p>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default Reviews