import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import "../../styles/index.sass"

const Header = () => {
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
    <div className="grid">
      <header className="grid">
        <div className="contact-info">
          <div className="icons">
            <img src="../Assets/icons/smartphone.svg" alt="Phone Icon" />
            <p>+44 20 4511 0600</p>
          </div>
          <div className="icons">
            <img src="../Assets/icons/clock-circular-outline.svg" alt="Clock Icon" />
            <p>Mon-Sat 8AM-8PM <span>Sunday closed</span></p>
          </div>
          <div className="icons">
            <img src="../Assets/icons/envelope.svg" alt="Letter Icon" />
            <p>info@bauwerk.de</p>
          </div>
          <div className="icons">
            <img src="../Assets/icons/location-pin.svg" alt="Phone Icon" />
            <p>Mohrenstrasse 37, Berlin</p>
          </div>
        </div>

        <nav>
          <Link to="/" className="logo-area">
            <img src="../Assets/icons/logo.png" alt="" />
            <div className="name">
              <h1>{data.site.siteMetadata.title}</h1>
              <h3>Architecture</h3>
              <h3>Buro</h3>
            </div>
          </Link>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header