import React from 'react'

const MediaBar = () => {
    return (
        <div className="media-sidebar">
            <a href="#" className="icons">
                <img src="../Assets/icons/social/instagram-white.svg" alt="Instagram logo" />
                <h3>Instagram</h3>
            </a>
            <a href="#" className="icons">
                <img src="../Assets/icons/social/facebook-white.svg" alt="Facebook logo" />
                <h3>facebook</h3>
            </a>
            <a href="#" className="icons">
                <img src="../Assets/icons/social/twitter-white.svg" alt="Twitter logo" />
                <h3>Twitter</h3>
            </a>
            <a href="#" className="icons">
                <img src="../Assets/icons/social/behance-white.svg" alt="Behance logo" />
                <h3>Behance</h3>
            </a>
        </div>
    )
}

export default MediaBar