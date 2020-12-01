import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
    render() {
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
}

export default NavBar
