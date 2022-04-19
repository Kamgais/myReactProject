import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
        <nav className='nav-top'>
            <Link to="/">HOME</Link>
            <Link to="/products">PRODUCTS</Link>
            <Link to="/contact">CONTACT</Link>
            
        </nav>
    )
}