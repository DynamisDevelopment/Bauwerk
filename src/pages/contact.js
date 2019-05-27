import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"
import SectionTitle from "../components/sectionTitle/sectionTitle"
import Contact from "../components/contact/contact"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div className="grid">
                <SectionTitle section={"Contacts"} title={"Contact"} subtitle={"Us"} />
                <Contact />
            </div>
        </Layout>
    )
}

export default ContactPage