import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    return (
        <nav className= "top-navbar grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo" style={{ fontWeight:"bold"}}> Covid-19 World Statistics </Link>
                <NavbarLinks />
            </div>
        </nav>
    )
}

export default Navbar;