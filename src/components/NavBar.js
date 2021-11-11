import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MenuDropdown from './MenuDropdown'
import { NavHashLink } from 'react-router-hash-link'

const NavBar = () => {
  const dropdownRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const handleClick = () => {
    setMenuOpen((prev) => !prev)
  }
  const homeClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className='navbar-main'>
      {/* Main Navbar container */}
      <div className='container'>
        <div className='container-2'>
          <div className='container-3 '>
            {/* Website Title Logo*/}
            <NavLink to='/' exact className='logo-name' onClick={homeClick}>
              ShaneMuddCode
            </NavLink>

            <nav className='nav-1'>
              <NavHashLink to='/#project-section' className='navhashlink'>
                Projects
              </NavHashLink>
              <NavHashLink to='/#about-section' className='navhashlink'>
                About
              </NavHashLink>
            </nav>
          </div>

          {/* Top Right 3 Social Links */}
          <div className='social-links'>
            <SocialIcon
              url='https://www.linkedin.com/in/shane-mudd-87912930/'
              className='social-icon'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://github.com/ShaneMuddCode'
              className='social-icon'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url='https://www.twitter.com/ShaneMuddCode'
              className='social-icon'
              target='_blank'
              fgColor='#fff'
              style={{ height: 35, width: 35 }}
            />
          </div>
          {/* Hamburger */}
          <div className='mobile-menu-button' onClick={handleClick}>
            <FontAwesomeIcon
              icon={faBars}
              className={'hamburger-icon'}
              size={'2x'}
            />
          </div>
        </div>
      </div>
      {/* Hamburger Dropdown */}
      <div
        onClick={handleClick}
        ref={dropdownRef}
        className={!menuOpen ? 'dropdown-hidden' : null}
      >
        <MenuDropdown />
      </div>
    </div>
  )
}

export default NavBar
