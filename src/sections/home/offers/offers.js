import React from 'react'
import { Link } from "gatsby"

const Offers = () => {
    return (
        <div className="more-offers">
            <div className="offer">
                <img src="./Assets/icons/security.svg" alt="" />
                <Link to="/">
                    <h2>Exclusive 10 year warranty</h2>
                    <p>What's included</p>
                </Link>
            </div>
            <div className="offer">
                <img src="./Assets/icons/armchair.svg" alt="" />
                <Link to="/portfolio">
                    <h2>Modern interior projects</h2>
                    <p>See our works</p>
                </Link>
            </div>
            <div className="offer">
                <img src="./Assets/icons/blueprint.svg" alt="" />
                <Link to="/contact">
                    <h2>Get a personal estimate</h2>
                    <p>Fill the form</p>
                </Link>
            </div>
        </div>
    )
}

export default Offers
