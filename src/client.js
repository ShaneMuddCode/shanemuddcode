import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '6dd0qgk1',
  dataset: 'production',
  apiVersion: '2021-09-29',
  useCdn: true,
})
