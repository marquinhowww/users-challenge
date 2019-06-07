const { store } = require('../../store')
const { filter } = require('../../../lib')

const getAddress = (req, res) => {
  const users = store.getData()

  const { search = 'suite' } = req.query

  const data = filter.searchInAddress({
    search,
    users,
    properties: [
      'suite',
      'street',
      'city'
    ]
  })

  res.send({
    data
  })
}

module.exports = {
  getAddress
}
