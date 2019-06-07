const { store } = require('../../store')
const { filter } = require('../../../lib')

const getInfo = (req, res) => {
  const users = store
    .getData()
    .map(user => ({
      name: user.name,
      email: user.email,
      company: user.company
    }))

  const data = filter.sortByNameEmailAndAddress({
    users
  })

  res.send({
    data
  })
}

module.exports = {
  getInfo
}
