import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import "../../styles/index.sass"
import Icons from "../socialIcons/socialIcons"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          title
        }
      }
    }
    `)
    return (
        <div className="grid bg-black">
            <footer>
                <ul className="footer-column">
                    <div className="title">
                        <h1>Site</h1>
                        <h1>Menu</h1>
                    </div>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <ul className="footer-column">
                    <div className="title">
                        <h1>Our</h1>
                        <h1>Services</h1>
                    </div>
                    <li><a href="#">Architecture</a></li>
                    <li><a href="#">Interior Design</a></li>
                    <li><a href="#">Commercial Design</a></li>
                    <li><a href="#">LED Lighting</a></li>
                    <li><a href="#">Floor Planning</a></li>
                    <li><a href="#">Decorating</a></li>
                    <li><a href="#">All Services</a></li>
                </ul>
                <ul className="footer-column">
                    <div className="title">
                        <h1>Contact</h1>
                        <h1>Us</h1>
                    </div>
                    <li><img src="../Assets/icons/smartphone-copper.svg" /> +44 20 4511 0600</li>
                    <li><img src="../Assets/icons/envelope-copper.svg" /> info@bauwerk.com</li>
                    <li><img src="../Assets/icons/location-pin-copper.svg" /> Mohrenstrasse 37. Berlin</li>
                    <li><img src="../Assets/icons/clock-copper.svg" /> Mon-Sat 8AM-8PM <span>Sunday Closed</span></li>
                </ul>
                <div className="footer-column">
                    <div className="title">
                        <h1>Subscribe to Our</h1>
                        <h1>Newsletter</h1>
                    </div>
                    <div className="newsletter">
                        <input type="text" placeholder="email" />
                        <button><img src="../Assets/images/arrow-white-short.svg" /></button>
                    </div>
                    <Icons />
                </div>
            </footer>
            <div className="copyright">
                <Link to="/" className="logo-area">
                    <img src="../Assets/icons/logo.png" />
                    <div className="name">
                        <h1>{data.site.siteMetadata.title}</h1>
                        <h3>Architecture</h3>
                        <h3>Buro</h3>
                    </div>
                </Link>
                <p>2019 All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer