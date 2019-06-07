import React from 'react'
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"

const Partners = props => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    // This will let us map over every two Partners for they can be returned in the same column
    const partners = []
    for (let i = 0; i < props.edges[0].node.clientLogos.length; i = i + 2) {
        if (props.edges[0].node.clientLogos[i + 1] !== undefined) {
            partners.push({
                logo1: props.edges[0].node.clientLogos[i].file.url,
                logo2: props.edges[0].node.clientLogos[i + 1].file.url
            })
        } else { //Stop it from breaking if there's and odd number of logos. Not elegant but it works ヾ(⌐■_■)ノ♪
            partners.push({
                logo1: props.edges[0].node.clientLogos[i].file.url,
            })
        }
    }
    return (
        <div className="partners-section grid">
            <img src="./Assets/images/partners-bg.jpg" className="clients-bg" />
            <SectionTitle section={"Our Partners"} title={"The Best Companies"} subtitle={"Cooperate With Us"} />
            <Slider {...settings} slidesPerRow={4} className="partners-slider">
                {partners.map((logo, index) => {
                    return <div className="partner-col" key={index}>
                        <div className="logo"><img src={logo.logo1} alt="" /></div>
                        <div className="logo"><img src={logo.logo2} alt="" /></div>
                    </div>
                })}
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