import React from 'react'

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="text-wrapper">
                <h1>Subscribe to our newletter</h1>
                <p>Do not Miss the interesting news and be always in a trend</p>
            </div>
            <form className="sign-up">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe <img src="../Assets/images/arrow-white-short.svg" /></button>
            </form>
        </div>
    )
}

export default Newsletter