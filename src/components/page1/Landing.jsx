import React from 'react'
import Navigation from '../navigationBar/Navigation'
import HeroText from './heroSection/HeroText'
import CenterFlex from './centerFlex/CenterFlex'
import HeroImage from './heroSection/HeroImage'

const Landing = () => {
  return (
    <div className='min-h-screen bg-emerald-300'>
        <CenterFlex />
        <HeroImage />
        <HeroText />    
    </div>
  )
}

export default Landing