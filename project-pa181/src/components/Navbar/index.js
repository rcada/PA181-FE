import React from 'react'
import {Nav, NavLink, NavBtn, NavMenu, Bars} from './NavbarElements'

function Navbar() {
  return (
    <>
        <Nav>
            <NavLink to='/'>
                <h1>Home</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/registration'>
                    Registration
                </NavLink>
                <NavLink to='/leave-review'>
                    Leave a review
                </NavLink>
                <NavLink to='/reviews'>
                    Reviews
                </NavLink>
                <NavLink to='/schedule'>
                    Schedule
                </NavLink>
                <NavLink to='/statistics'>
                    Statistics
                </NavLink>
            </NavMenu>
            
        </Nav>
    </>
  )
}

export default Navbar