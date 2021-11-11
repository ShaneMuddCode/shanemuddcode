import React from 'react'
// import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

const LandingButtons = () => {
  return (
    <div className='home-buttons-main'>
      {/* Posts/Projects/About Links md:my-6*/}
      <nav className='home-buttons-grid'>
        <NavHashLink
          to='/#project-section'
          className='landing-button'
          activeClassName=''
        >
          Projects
        </NavHashLink>
        <NavHashLink to='/#about-section' className='landing-button'>
          About
        </NavHashLink>
      </nav>
    </div>
  )
}

export default LandingButtons
