import React from 'react'
import Footer from "./footer/footer.js"
import Header from "./header/header.js"
import "../styles/index.sass"

const Layout = (props) => {
    return (
        <div>
            <div>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout