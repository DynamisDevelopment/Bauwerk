import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import "../../styles/index.sass"
import ResponsiveMenu from 'react-responsive-navbar'


class Header extends React.Component {

  constructor(props) {
    super(props)
    this.showNav = this.showNav.bind(this)
    this.state = {
      page: props,
      showNav: false
    }
  }

  componentDidMount() {
    // If window size is less than 900px changes showNav to false which hides the nav ul.

    const mq = window.matchMedia("(max-width: 900px)")
    if (mq.matches) this.setState(() => ({ showNav: false }))
    else this.setState(() => ({ showNav: true }))

    window.addEventListener("resize", () => {
      if (mq.matches) this.setState(() => ({ showNav: false }))
      else this.setState(() => ({ showNav: true }))
    })
  }
  showNav() { this.setState(prev => ({ showNav: !prev.showNav })) }

  render() {
    return (
      <div className="grid">
        <header className={this.state.page.name === "home" || this.state.page.over == true ? "is-over grid" : "not-over grid"}>
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
              <img src="../Assets/icons/logo.svg" alt="" />
              <div className="name">
                <h1>Bauwerk</h1>
                <h3>Architecture</h3>
                <h3>Buro</h3>
              </div>
            </Link>
            <ul style={this.state.showNav ? { display: 'flex ' } : { display: 'none' }}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div onClick={this.showNav} className="burger"><img src="../Assets/icons/nav-burger.svg" alt="nav-burger" /></div>
          </nav>
        </header>
      </div>
    )
  }
}


export default Header