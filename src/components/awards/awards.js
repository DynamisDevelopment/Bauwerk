import React from 'react'
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Awards = props => {
    const data = useStaticQuery(graphql`
    query {
        image: file(relativePath: {eq: "images/bg.jpg"}) {
            childImageSharp {
            fluid(quality: 100)  {
                ...GatsbyImageSharpFluid
            }
            }
        }
}
`)

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        lazyLoad: 'progressive',
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    rows: 2,
                    dots: true
                }
            },
        ]
    }
    return (
        <div className="awards-section grid">
            <Img
                fluid={data.image.childImageSharp.fluid}
                fadeIn={true}
                className='awards-bg'
            />
            <SectionTitle section={"Timeline"} title={props.whos} subtitle={"Awards"} />
            <div className="awards">
                <Slider {...settings} className="awards-slider">
                    {props.awards.map((edge, index) => {
                        return <div className="award-col" key={index}>
                            <div className="award"><img src={edge.file.url} /></div>
                            <h1>{edge.title}</h1>
                        </div>
                    })}
                </Slider>
            </div>
        </div>
    )
}


export default Awards