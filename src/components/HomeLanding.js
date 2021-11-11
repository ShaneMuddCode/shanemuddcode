import React from 'react'
import image from '../img/SanJuan.png'
import LandingButtons from './LandingButtons'

const HomeLanding = () => {
  return (
    <main className='home-landing'>
      <img src={image} alt='San Juan, Puerto Rico' className='bg-image' />
      <section className='outer-container'>
        <div className='inner'>
          <h1 className='heading-text'>Python | GIS | JavaScript</h1>
          <LandingButtons />
        </div>
        <a
          href='https://www.linkedin.com/in/shane-mudd-87912930/'
          target='_blank'
          rel='noreferrer'
          className='btn btn-outline'
        >
          Contact me on LinkedIn
        </a>
      </section>
    </main>
  )
}

export default HomeLanding
