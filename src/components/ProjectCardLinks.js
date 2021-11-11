import React from 'react'
// import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectCardLinks = ({ projectLinkData }) => {
  return (
    <>
      <div className='project-card-links'>
        <a
          href={projectLinkData.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={`btn ${!projectLinkData.link ? 'no-link' : ''}`}>
            <span
              role='img'
              aria-label='nerdy guy'
              className='emoji-guy'
              style={{
                fontSize: '1.7rem',
                verticalAlign: 'top',
                marginRight: '.5rem',
              }}
            >
              🤓
            </span>
            <p className='link-text'>See project</p>
          </div>
        </a>

        <a
          href={projectLinkData.github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={`btn ${!projectLinkData.github ? 'no-link' : ''}`}>
            <FontAwesomeIcon
              icon={faGithub}
              size={'2x'}
              className='social-icon'
              style={{
                height: 36,
                width: 36,
                verticalAlign: 'text-middle',
                margin: '0 1rem 0 0',
                position: 'relative',
                top: '3px',
              }}
            />
            <p className='link-text'>See github </p>
          </div>
        </a>
      </div>
    </>
  )
}

export default ProjectCardLinks
