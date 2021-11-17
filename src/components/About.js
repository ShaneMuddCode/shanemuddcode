import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'
import imageUrlBuilder from '@sanity/image-url'
import image from '../img/severnriver.png'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const About = () => {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url}`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error)
  }, [])

  if (!author) return <div>Loading...</div>

  return (
    <div className='about-main'>
      <div id='about-section' className='break-line about-bl'></div>

      <div className='about-image-main'>
        <img src={image} alt='Severn River' className='about-bg-image' />

        <div className='card-container'>
          <section className='card shadow-xl'>
            {/* Div Header and Image */}

            <div className='col-1-container'>
              <header className='card-header'>About</header>
              <img
                src={urlFor(author.authorImage).url()}
                className='card-image'
                alt={author.name}
              />
            </div>
            <div className='about-list-container'>
              <div className='about-list-items'>
                <ul className='about-ul'>
                  <li>Advanced Data Processing | Geospatial & Environmental</li>
                  <li>Python | Pandas | ArcPy | ArcGIS | JavaScript</li>
                  <li>WordPress website management</li>
                  <li>HTML | CSS | React | Plotly | Mapbox</li>
                  <li>
                    10+ years federal IT program and project management
                    experience
                  </li>
                  <li>
                    Specialized experience in environmental management, disaster
                    preparedness, response & recovery
                  </li>
                </ul>
              </div>
              <div className='btn-container'>
                <a
                  href='https://www.linkedin.com/in/shane-mudd-87912930/'
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Contact me on LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className='break-line footer-bl'>Copyright 2021 ShaneMudd.com</div>
    </div>
  )
}

export default About
