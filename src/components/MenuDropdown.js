import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

const MenuDropdown = () => {
  return (
    <div className='mobile-menu'>
      <NavHashLink to='/' className='dropdown-link'>
        Home
      </NavHashLink>
      <NavHashLink to='/#project-section' className='dropdown-link'>
        Projects
      </NavHashLink>
      <NavHashLink to='/#about-section' className='dropdown-link'>
        About
      </NavHashLink>
    </div>
  )
}

export default MenuDropdown
