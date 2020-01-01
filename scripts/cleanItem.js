const cleanItem = ({ fields }) => {
  return {
    startDate: fields.startDate,
    price: fields.price,
    status: fields.status,
  }
}

module.exports = cleanItem
