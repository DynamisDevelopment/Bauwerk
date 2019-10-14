import React from 'react'
import "../../styles/index.sass"
import SectionTitle from "../sectionTitle/sectionTitle"
import Form from "../form/form"
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Contact = () => {
    const data = useStaticQuery(graphql`
    query {
        image: file(relativePath: {eq: "images/bg.jpg"}) {
            childImageSharp {
            fluid(quality: 80)  {
                ...GatsbyImageSharpFluid
            }
            }
        }
}
`)

    return (
        <div className="contact-section grid">
            <Img
                fluid={data.image.childImageSharp.fluid}
                fadeIn={true}
                className='contact-bg'
            />
            <SectionTitle section={"Contact"} title={"Let's Start"} subtitle={"a New Project"} />
            <div className="contact-row">
                <div className="info">
                    <p className="details">We are always glad to cooperate and are ready to execute any project considering all your wishes with the application of our many years of experience.</p>
                    <div className="contact-info">
                        <p>Phone: <img src="../Assets/icons/smartphone-copper.svg" /> +44 20 4511 0600</p>
                        <p>Email: <img src="../Assets/icons/envelope-copper.svg" /> hello@bauwerk.de</p>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    )
}


export default Contact