import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <div className='container'>
                <h1>Crypt<span>Oh</span></h1>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/featured'>Featured</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
                </ul>

                <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div>

                <div className='hamburger' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

            </div>
        </div>
    )
}

export default Navbar