import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"

const Partners = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulPartners {
            edges {
            node {
                clientLogos {
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
        <div className="partners-section grid">
            <img src="./Assets/images/Clients-bg.jpg" className="clients-bg" />
            <SectionTitle section={"Our Partners"} title={"The Best Companies"} subtitle={"Cooperate With Us"} />
            <Slider {...settings} slidesPerRow={4} className="partners-slider">
                {data.allContentfulPartners.edges.map(edge => edge.node.clientLogos.map((logo, index) => {
                    return <div className="partner-col" key={index}>
                        <img src={logo.file.url} />
                        <img src={logo.file.url} />
                    </div>
                }))}
            </Slider>
        </div>
    )
}

export default Partners


//     < div className = "partner-col" >
//         <img src="./Assets/images/Clients/ArtStudio.png" />
//         <img src="./Assets/images/Clients/Joy.png" />
// </div >
//     <div className="partner-col">
//         <img src="./Assets/images/Clients/ArtStudio.png" />
//         <img src="./Assets/images/Clients/Joy.png" />
//     </div>
//     <div className="partner-col">
//         <img src="./Assets/images/Clients/ArtStudio.png" />
//         <img src="./Assets/images/Clients/Joy.png" />
//     </div>
//     <div className="partner-col">
//         <img src="./Assets/images/Clients/ArtStudio.png" />
//         <img src="./Assets/images/Clients/Joy.png" />
//     </div>
//     <div className="partner-col">
//         <img src="./Assets/images/Clients/ArtStudio.png" />
//         <img src="./Assets/images/Clients/Joy.png" />
//     </div>
//     <div className="partner-col">
//         <img src="./Assets/images/Clients/ArtStudio.png" />
//         <img src="./Assets/images/Clients/Joy.png" />
//     </div>
//     <div className="partner-col">
//         <img src="./Assets/images/Clients/ArtStudio.png" />
//         <img src="./Assets/images/Clients/Joy.png" />
//     </div>
//     <div className="partner-col">
//         <img src="./Assets/images/Clients/ArtStudio.png" />
//         <img src="./Assets/images/Clients/Joy.png" />
//     </div>