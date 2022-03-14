import React from 'react'
import { GiAbstract049 } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to={'/'}>
            <div className='navbar'>
                <GiAbstract049 className='icon' />
                <h1> Kripto<span className='purple'>Damus</span></h1>
            </div>
        </Link>
    )
}

export default Navbar