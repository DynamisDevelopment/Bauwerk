import React from 'react'

const SectionTitle = props => {
    return (
        <div className="section-title">
            <h1>{props.section} <div className="line"></div></h1>
            <h3>{props.title}</h3>
            <h3>{props.subtitle}</h3>
        </div>
    )
}

export default SectionTitle