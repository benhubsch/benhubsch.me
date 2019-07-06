import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
        </div>
        <div className="content">
            <div className="inner">
                <h1>Ben Hubsch</h1>
                <p>I graduated from Duke University in 2019, and I'm working at Facebook in Washington, D.C. as a software engineer.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="https://www.facebook.com/ben.hubsch" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com/sw33tb3n/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/benhubsch/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/benhubsch" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="mailto: bhubsch@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    timeout: PropTypes.bool
}

export default Header
