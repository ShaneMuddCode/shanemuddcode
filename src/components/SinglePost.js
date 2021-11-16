import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  if (!singlePost) return <div>Loading...</div>

  return (
    <main className='bg-smMedGray min-h-screen p-8'>
      <article className='md:max-w-6xl shadow-lg mx-auto bg-green-100 rounded-lg'>
        <header className='relative align-bottom'>
          <div className='absolute h-full w-full flex items-center justify-center p-8'>
            {/* Title Sub-Card */}
            <div className='justify-self-end bg-white bg-opacity-75 rounded p-8'>
              <h1 className='justify-end cursive text-2xl lg:text-4xl mb-4'>
                {singlePost.title}
              </h1>
              <div className='flex justify-end text-gray-800'>
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className='w-10 h-10 rounded-full'
                />
                <p className='cursive flex items-center pl-2 text-2xl'>
                  {singlePost.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className='w-full object-cover rounded-t'
            style={{ height: '400px' }}
          />
        </header>
        {/* lg:prose-xl */}
        <div className='bg-smDarkGray px-8 lg:px-40 py-12 lg:py-20 prose  max-w-full text-smalt-blue-100 md:text-2xl'>
          <BlockContent
            blocks={singlePost.body}
            projectId='6dd0qgk1'
            dataset='production'
          ></BlockContent>
        </div>
      </article>
    </main>
  )
}

export default SinglePost
