import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import Contact from "../components/contact/contact"
import MediaBar from "../components/mediaBar/mediaBar"

// Styles 
import "../styles/_contact.sass"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div className="grid">
                <SectionTitle section={"Contacts"} title={"Contact"} subtitle={"Us"} />
                <MediaBar />
                <h4 className="subtitle">We will always be glad to see you on a visit to us on business and just like that, call and write, welcome!</h4>
                <div className="details">
                    <div className="details-col">
                        <h1>Head Office Berlin</h1>
                        <ul>
                            <li><img src="../Assets/icons/location-pin-copper.svg" /> Mohrenstrasse 36, Berlin</li>
                            <li><img src="../Assets/icons/smartphone-copper.svg" />+44 20 4511 0500</li>
                            <li><img src="../Assets/icons/envelope-copper.svg" />info@bauwerk.de</li>
                            <li><img src="../Assets/icons/clock-copper.svg" />Mon - Sat 8AM-8PM sunday closed</li>
                        </ul>
                    </div>
                    <div className="details-col">
                        <h1>Head Office Berlin</h1>
                        <ul>
                            <li><img src="../Assets/icons/location-pin-copper.svg" /> Mohrenstrasse 36, Berlin</li>
                            <li><img src="../Assets/icons/smartphone-copper.svg" />+44 20 4511 0500</li>
                            <li><img src="../Assets/icons/envelope-copper.svg" />info@bauwerk.de</li>
                            <li><img src="../Assets/icons/clock-copper.svg" />Mon - Sat 8AM-8PM sunday closed</li>
                        </ul>
                    </div>
                    <div className="details-col">
                        <h1>Head Office Berlin</h1>
                        <ul>
                            <li><img src="../Assets/icons/location-pin-copper.svg" /> Mohrenstrasse 36, Berlin</li>
                            <li><img src="../Assets/icons/smartphone-copper.svg" />+44 20 4511 0500</li>
                            <li><img src="../Assets/icons/envelope-copper.svg" />info@bauwerk.de</li>
                            <li><img src="../Assets/icons/clock-copper.svg" />Mon - Sat 8AM-8PM sunday closed</li>
                        </ul>
                    </div>
                </div>

                <Contact />
            </div>
        </Layout>
    )
}

export default ContactPage