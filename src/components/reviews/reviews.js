import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SectionTitle from "../sectionTitle/sectionTitle"
import Slider from "react-slick"

const Reviews = props => {
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
        slidesToShow: 2,
        lazyLoad: 'progressive',
        slidesToScroll: 2,
        adaptiveHeight: true,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }
    return (
        <div className="reviews-section">
            <SectionTitle section={"Testimonials"} title={"What"} subtitle={"Clients Say"} />
            <Slider {...settings} className="reviews-slider">
                {props.edges.map((review, index) => {
                    return <div key={index}>
                        <div className="review-col">
                            <img src={review.node.avatar.file.url} className="avatar" />
                            <h2>{documentToReactComponents(review.node.reviewContent.json)}</h2>
                            <div className="details">
                                <img src="../Assets/icons/quotes.svg" />
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