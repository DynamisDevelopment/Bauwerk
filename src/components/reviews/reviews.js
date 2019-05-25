import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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
                         json
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
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    return (
        <div className="reviews-section">
            <SectionTitle section={"Testimonials"} title={"What"} subtitle={"Clients Say"} />
            <Slider {...settings} slidesPerRow={2} className="reviews-slider">
                {data.allContentfulReviews.edges.map((review, index) => {
                    return <div key={index}>
                        <div className="review-col">
                            <img src={review.node.avatar.file.url} className="avatar" />
                            <h2>{documentToReactComponents(review.node.reviewContent.json)}</h2>
                            <div className="details">
                                <img src="./Assets/icons/quotes.svg" />
                                <div className="more-details">
                                    <p className="name">{review.node.name}</p>
                                    <p className="date">{review.node.createdAt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default Reviews