import React from 'react'
import "../../styles/index.sass"
import SectionTitle from "../sectionTitle/sectionTitle"

const Contact = () => {
    return (
        <div className="contact-section grid">
            <img src="./Assets/images/Contact-bg.jpg" className="contact-bg" />
            <SectionTitle section={"Contact"} title={"Let's Start"} subtitle={"a New Project"} />
            <div className="contact-row">
                <div className="info">
                    <p className="details">We are always glad to cooperate and are ready to execute any project considering all your wishes with the application of our many years of experience.</p>
                    <div className="contact-info">
                        <p>Phone: <img src="./Assets/icons/smartphone.svg" /> +44 20 4511 0600</p>
                        <p>Email: <img src="./Assets/icons/smartphone.svg" /> hello@bauwerk.de</p>
                    </div>
                </div>
                <form className="contact-form">
                    <h1>Please fill the form</h1>
                    <input type="text" name="name" placeholder="Name" className="name" />
                    <input type="text" name="name" placeholder="Phone" className="phone" />
                    <input type="text" name="name" placeholder="Email" className="email" />
                    <textarea name="message" placeholder="Message" className="message" />
                    <button type="submit" className="more-btn">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact