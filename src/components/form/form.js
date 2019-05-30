import React from 'react'

const Form = () => {
    return (
        <form className="contact-form">
            <h1>Please fill the form</h1>
            <input type="text" name="name" placeholder="Name" id="name" />
            <input type="text" name="name" placeholder="Phone" id="phone" />
            <input type="text" name="name" placeholder="Email" id="email" />
            <textarea name="message" placeholder="Message" id="message" />
            <button type="submit" className="more-btn">Send <img src="../Assets/images/arrow-white.svg" /></button>
        </form>
    )
}

export default Form