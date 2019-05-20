import React from 'react'

const Offers = () => {
    return (
        <div className="grid">
            <div className="more-offers">
                <div className="offer">
                    <img src="./Assets/icons/security.svg" alt="" />
                    <a href="#">
                        <h2>Exclusive 10 year warranty</h2>
                        <p>What's included</p>
                    </a>
                </div>
                <div className="offer">
                    <img src="./Assets/icons/armchair.svg" alt="" />
                    <a href="#">
                        <h2>Modern interior projects</h2>
                        <p>See our works</p>
                    </a>
                </div>
                <div className="offer">
                    <img src="./Assets/icons/blueprint.svg" alt="" />
                    <a href="#">
                        <h2>Get a personal estimate</h2>
                        <p>Fill the form</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Offers
