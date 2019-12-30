const Promise = require('bluebird')
const { getContent } = require('./scripts/getContent')
const path = require('path')

exports.createPages = ({ actions }) => {
  return new Promise(resolve => {
    const { createPage } = actions
    const Page = path.resolve('./src/node_pages/the-cottage.tsx')

    resolve(
      Promise.all([Page, getContent()])
        .then(values => {
          console.log('Create static page')
          console.log('Content: ', JSON.stringify(values[1]))
          createPage({
            component: values[0],
            path: '/the-cottage',
            context: { bookings: values[1] },
          })
        })
        .catch(error => {
          console.error('Gatsby node failed to create page')
          throw new Error(error)
        })
    )
  })
}
