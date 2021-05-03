/* eslint-disable @typescript-eslint/camelcase */
const contentful = require('contentful')
const cleanContent = require('./cleanContent')

const getContent = async (content_type = 'booking') => {
  const client = contentful.createClient({
    space: process.env.MFC_CTFL_SPACE_ID,
    environment: 'master',
    accessToken: process.env.MFC_CTFL_TOKEN,
  })

  const { items } = await client.getEntries({
    content_type,
    order: '-sys.createdAt',
  })

  if (items.length > 0) {
    return cleanContent(items)
  }
  return {}
}

module.exports = { getContent }
