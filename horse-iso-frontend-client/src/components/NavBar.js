import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () =>{

        return (
            <nav>
            <li><NavLink to='/'>Home</NavLink></li>
                <ul>
                    <li><NavLink to='/users'>Users</NavLink></li>
                    <li><NavLink to='/users/new'>Create User</NavLink></li>
                </ul>
            </nav>
        )
}

export default NavBar
