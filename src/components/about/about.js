import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          title
        }
      }
    }
    `)
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    return (
        <div className="about-section grid">
            <img src="./Assets/images/about-background.png" className="about-bg" />
            <SectionTitle section={"About Us"} title={"Your Best"} subtitle={"Choice"} />
            <div className="about-row">
                <div className="about-column">
                    <Link to="/" className="logo-area">
                        <img src="./Assets/icons/logo.png" />
                        <div className="name">
                            <h1>{data.site.siteMetadata.title}</h1>
                            <h3>Architecture</h3>
                            <h3>Buro</h3>
                        </div>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam, dicta animi aperiam numquam repellendus autem dolorum. Quam dicta dolorem officiis omnis vero, ullam recusandae minus reiciendis dolorum rem quasi corporis autem non aut eum repellendus! Molestiae explicabo quasi eveniet quidem, earum accusamus cumque quia dolore minus assumenda iusto harum reprehenderit. Culpa dolores aut obcaecati! Dolore, voluptas temporibus ex culpa nesciunt ducimus animi inventore blanditiis, cupiditate molestias tempora facere, sed harum a aut incidunt laudantium quod error minus natus ipsum quae optio hic. Impedit dolore nemo quos enim a magnam. Omnis nesciunt doloribus eos? Cupiditate dolor natus ad neque odio odit minima consequuntur!</p>
                </div>
                <Slider {...settings} className="about-slider">
                    <div>
                        <img src="https://via.placeholder.com/700" />
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/700" />
                    </div>
                </Slider>
            </div>
            <div className="history">
                <img src="./Assets/images/15Years.svg" className="years" />
                <img src="./Assets/images/completedWorks.svg" className="completedWorks" />
            </div>
            <div className="about-row-2">
                <Slider {...settings} className="about-slider">
                    <div>
                        <img src="https://via.placeholder.com/600" />
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/600" />
                    </div>
                </Slider>
                <div className="about-column">
                    <h2>Our main goal is to combine our professionalism with the clients desire.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam, dicta animi aperiam numquam repellendus autem dolorum. Quam dicta dolorem officiis omnis vero, ullam recusandae minus reiciendis dolorum rem quasi corporis autem non aut eum repellendus! Molestiae explicabo quasi eveniet quidem, earum accusamus cumque quia dolore minus assumenda iusto harum reprehenderit. Culpa dolores aut obcaecati! </p>
                </div>
            </div>
        </div>
    )
}

export default About