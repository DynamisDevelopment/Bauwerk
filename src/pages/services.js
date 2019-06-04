import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

//Components
import Layout from "../components/layout"
import Head from "../components/head"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import Contact from "../components/contact/contact"
import MediaBar from "../components/mediaBar/mediaBar"


// Styles 
import "../styles/_services.sass"

const ServicesPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulServices{
            edges {
                node {
                    title
                    description 
                        mainImage {
                            file {
                                url
                                }
                        }
                }
                }
        }
    }
    `)
    return (
        <div>
            <Layout>
                <Head title="Services" />
                <div className="grid">
                    <SectionTitle section={"Services"} title={"Our Professional"} subtitle={"Specializations"} />
                    <MediaBar />
                    {data.allContentfulServices.edges.map((edge, index) => {
                        return <div className="services-row">
                            <img src={edge.node.mainImage.file.url} />
                            <div className="text-wrapper">
                                <h1>{edge.node.title}</h1>
                                <p>{edge.node.description}</p>
                                <Link to='/contact'><button className="more-btn">Make an Order <img src="../Assets/icons/arrow.svg" className="btn-arrow" /></button></Link>
                            </div>
                        </div>
                    })}
                    <Contact />
                </div>
            </Layout>
        </div>
    )
}
export default ServicesPage
