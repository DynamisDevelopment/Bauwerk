import React from 'react'
import SectionTitle from "../../../components/sectionTitle/sectionTitle"
import Form from "../../../components/form/form"
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Special = () => {
    const data = useStaticQuery(graphql`
    query {
        image: file(relativePath: {eq: "images/special-bg.jpg"}) {
            childImageSharp {
            fluid(quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
            }
            }
        }
}
`)

    return (
        <div className="special-offer grid">
            <Img
                fluid={data.image.childImageSharp.fluid}
                fadeIn={true}
                loading={'lazy'}
                className='special-bg'
            />
            <SectionTitle section={"Special Offer"} title={"How to save 50%"} subtitle={"of money on repairs"} />
            <div className="offer-column">
                <div className="details">
                    <h3>Not everyone knows, and where, but there are</h3>
                    <h3><strong>10 very important tips, how easy it is to save up to 50% on repairs</strong></h3>
                    <h3>and on the money saved to buy new appliances.</h3>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default Special