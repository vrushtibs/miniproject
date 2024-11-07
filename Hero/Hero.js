import React from 'react'
import './Hero.css'
import latestphone from '../Assets/latestphone.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>WHAT'S NEW?</h2>
            <div className='latest'>
                <p>Don't miss out on the</p>
                <p>Latest Releases!</p>
            </div>
            <div className='hero-new'>
                <button>Check it out</button>
            </div>
        </div>

        
        <div className='hero-right'>
            <img src={latestphone} alt=""/>
        </div>
    </div>
  )
}

export default Hero