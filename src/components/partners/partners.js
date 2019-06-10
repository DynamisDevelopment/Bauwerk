import React from 'react'
import Slider from "react-slick"
import SectionTitle from "../sectionTitle/sectionTitle"

const Partners = props => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesPerRow: 4,
        rows: 2,
        slidesToScroll: 1
    }
    console.log(props, "-----------------")

    return (
        <div className="partners-section grid">
            <img src="./Assets/images/partners-bg.jpg" className="clients-bg" />
            <SectionTitle section={"Our Partners"} title={"The Best Companies"} subtitle={"Cooperate With Us"} />
            <Slider {...settings} className="partners-slider">
                {props.edges[0].node.clientLogos.map((img, index) => {
                    return <div className="partner"><img src={img.file.url} alt="" /></div>
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