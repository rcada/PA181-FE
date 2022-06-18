import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    text-decoration: none;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 10;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 760px) {
        display: none;
    }
    
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 760px) {
        display: none;
    }
`