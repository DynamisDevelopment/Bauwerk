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
                            <li><img src="../Assets/icons/location-pin-copper.svg" /> 0600 Las vegas Boulevard South</li>
                            <li><img src="../Assets/icons/smartphone-copper.svg" />+1 702 740 0600</li>
                            <li><img src="../Assets/icons/envelope-copper.svg" />info@bauwerk.de</li>
                            <li><img src="../Assets/icons/clock-copper.svg" />Mon - Sat 8AM-8PM sunday closed</li>
                        </ul>
                    </div>
                    <div className="details-col">
                        <h1>Head Office Berlin</h1>
                        <ul>
                            <li><img src="../Assets/icons/location-pin-copper.svg" /> Placa d'Urquinoana, 4, Barcelona</li>
                            <li><img src="../Assets/icons/smartphone-copper.svg" />+34 933 12 0600</li>
                            <li><img src="../Assets/icons/envelope-copper.svg" />info@bauwerk.de</li>
                            <li><img src="../Assets/icons/clock-copper.svg" />Mon - Sat 8AM-8PM sunday closed</li>
                        </ul>
                    </div>
                </div>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.1688500667997!2d13.392845815807199!3d52.512283279812756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d9f7789ddb%3A0x7048a58e97b4ff78!2sMohrenstra%C3%9Fe+36%2C+10117+Berlin%2C+Germany!5e0!3m2!1sen!2sus!4v1559236926173!5m2!1sen!2sus" />
                <Contact />
            </div>
        </Layout>
    )
}

export default ContactPage