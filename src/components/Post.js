import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

const Post = () => {
  const [postData, setPost] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{title,slug,mainImage{asset->{_id,url},alt}}`)
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])
  // bg-blueGray-200
  return (
    <>
      <div className='post-main'>
        <section className='container'>
          <h1 className='section-h1-text '>Posts</h1>
          {/* Grid of Post Cards */}
          <div className='post-cards-grid'>
            {postData &&
              postData.map((post, index) => (
                <article key={post.slug.current}>
                  {/* Link wraps entire Card */}
                  <Link to={'/post/' + post.slug.current}>
                    <span className='post-article shadow-xl' key={index}>
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className='image'
                      />
                      <span className='title-span'>
                        <h3 className='title-text'>{post.title}</h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Post
