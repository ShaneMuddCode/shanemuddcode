import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'
// import { SocialIcon } from 'react-social-icons'
import ProjectCardLinks from './ProjectCardLinks.js'

const Project = () => {
  const [projectData, setProjectData] = useState(null)

  const sortProjectData = (projectData) => {
    return [...projectData].sort((a, b) => a.order - b.order)
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          _id,
          title,
          order,
          date,
          place,
          description,
          projectType,
          link,
          github,
          tags
        }`
      )
      .then((data) => sortProjectData(data))
      .then((data) => setProjectData(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <div id='project-section' className='break-line bl-2' />
      <main className='projects-container'>
        <section className='projects-container-inner'>
          <h1 className='section-h1-text'>Projects</h1>

          <section className='project-card-grid'>
            {projectData &&
              projectData.map((project, index) => (
                <article className='project-card  shadow-xl' key={index}>
                  <h3 className='proj-card-h3'>{project.title}</h3>
                  <div>
                    <p className='description-text'>{project.description}</p>
                  </div>
                  <ProjectCardLinks projectLinkData={project} />
                </article>
              ))}
          </section>
        </section>
        {/* </div> */}
      </main>
    </>
  )
}

export default Project
