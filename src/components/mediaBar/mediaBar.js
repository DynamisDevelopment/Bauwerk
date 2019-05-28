import React from 'react'

const MediaBar = () => {
    return (
        <div className="media-sidebar">
            <a href="#" className="icons">
                <img src="../Assets/icons/social/instagram.svg" alt="Instagram logo" />
                <h3>Instagram</h3>
            </a>
            <a href="#" className="icons">
                <img src="../Assets/icons/social/facebook.svg" alt="Facebook logo" />
                <h3>facebook</h3>
            </a>
            <a href="#" className="icons">
                <img src="../Assets/icons/social/twitter.svg" alt="Twitter logo" />
                <h3>Twitter</h3>
            </a>
            <a href="#" className="icons">
                <img src="../Assets/icons/social/behance.svg" alt="Behance logo" />
                <h3>Behance</h3>
            </a>
        </div>
    )
}

export default MediaBar