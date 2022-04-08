import React from 'react'
import './About.css'
import Two from '../img/two.png'

const About = () => {
    return (
        <div className='about'>
            <div className='container'>

                <div className='left'>
                    <img src={Two} alt='' />
                </div>

                <div className='right'>
                    <h2>Earn a passive income with Crypto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Explore</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About