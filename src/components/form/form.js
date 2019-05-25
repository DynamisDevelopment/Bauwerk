import React from 'react'

const Form = () => {
    return (
        <form className="contact-form">
            <h1>Please fill the form</h1>
            <input type="text" name="name" placeholder="Name" className="name" />
            <input type="text" name="name" placeholder="Phone" className="phone" />
            <input type="text" name="name" placeholder="Email" className="email" />
            <textarea name="message" placeholder="Message" className="message" />
            <button type="submit" className="more-btn">Send <img src="./Assets/images/arrow-white.svg" /></button>
        </form>
    )
}

export default Form