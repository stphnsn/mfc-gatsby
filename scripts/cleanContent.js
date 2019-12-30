const cleanItem = require('./cleanItem')

const cleanContent = contentItems => {
  const cleanContentObj = {}
  contentItems.map(item => {
    const result = cleanItem(item)
    cleanContentObj[result.startDate] = result
  })
  return cleanContentObj
}

module.exports = cleanContent
