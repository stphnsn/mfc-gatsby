const cleanItem = ({ fields }) => {
  return {
    startDate: fields.startDate,
    price: fields.price,
  }
}

module.exports = cleanItem
