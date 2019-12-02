import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='nav-wrapper black'>
            <div className="container">
                <Link to="/" className="brand-logo">Travel Agency</Link>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)