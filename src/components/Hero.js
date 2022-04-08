import React from 'react'
import './Hero.css'
import Four from '../img/four.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                <div className='left'>
                    <p>Buy, Sell & Trade Crypto using any account you desire</p>
                    <h1>Invest in Cryptocurrency</h1>
                    <p>Storing hundreds of CryptOh</p>

                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Explore</button>
                    </div>
                </div>

                <div className='right'>
                    <div className='img-container'>
                        <img src={Four} alt='bitcoin-lock'></img>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero