import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='nav-wrapper black darken-3'>
            <div className="container">
                <a className="brand-logo">Travel Agency</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)