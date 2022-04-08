import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>

                <div classname='col col-1'>
                    <h1>Crypt<span>Oh</span></h1>
                </div>

                <div className='col'>
                    <h5>Support</h5>
                    <span classname='bar'></span>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Support</a>
                    <a href='/'>FAQ</a>
                    <a href='/'>News</a>
                </div>

                <div className='col'>
                    <h5>Developers</h5>
                    <span classname='bar'></span>
                    <a href='/'>Commerce</a>
                    <a href='/'>Cloud</a>
                    <a href='/'>Pro</a>
                    <a href='/'>API</a>
                </div>

                <div className='col'>
                    <h5>Company</h5>
                    <span classname='bar'></span>
                    <a href='/'>About</a>
                    <a href='/'>Legal</a>
                    <a href='/'>Privacy</a>
                    <a href='/'>Terms and Conditions</a>
                </div>

                <div className='col'>
                    <h5>Socials</h5>
                    <span classname='bar'> </span>
                    <a href='/'><FaFacebook className='icon' /></a>
                    <a href='/'><FaTwitter className='icon' /></a>
                    <a href='/'><FaGithub className='icon' /></a>
                    <a href='/'><FaLinkedin className='icon' /></a>
                </div>

            </div>
        </div>
    )
}

export default Footer