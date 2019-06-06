import React from 'react'
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"

const Awards = props => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        lazyLoad: 'progressive',
        slidesToShow: 4,
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
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
        ]
    }
    return (
        <div className="awards-section grid">
            <img src="../Assets/images/awards-bg.png" className="awards-bg" />
            <SectionTitle section={"Timeline"} title={props.whos} subtitle={"Awards"} />
            <div className="awards">
                <Slider {...settings} className="awards-slider">
                    {props.awards.map((edge, index) => {
                        return <div className="award">
                            <img src={edge.file.url} />
                            <h1>{edge.title}</h1>
                        </div>
                    })}
                </Slider>
            </div>
        </div>
    )
}


export default Awards