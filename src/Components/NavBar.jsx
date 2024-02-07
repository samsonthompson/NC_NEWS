import React from "react";
import { Link } from "react-router-dom";
import '../Styles/main.css'

const NavBar = () => {
    return (
        <nav className="navigation-bar">
            <ul className="navigation-links">
                <li><Link to='/'>HOME</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar