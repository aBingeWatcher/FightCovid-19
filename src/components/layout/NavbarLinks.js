import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLinks = () => {
    return (
        <ul className="right">
            <li> <NavLink to='/indian-states'> India </NavLink></li> 
            <li> <NavLink to='/graphs'> Graphs </NavLink></li> 
            <li> <NavLink to='/'> Symptoms </NavLink></li> 
            <li> <NavLink to='/'> Donate Funds </NavLink></li> 
            <li> <NavLink to='/'> Test Centers </NavLink></li> 
            <li> <NavLink to='/aboutMe' className='btn darken' style={{textAlign:"center" }}>MG</NavLink></li> 
        </ul>
    )
}

export default NavbarLinks;