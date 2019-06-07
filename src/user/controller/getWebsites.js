const { store } = require('../../store')
const { filter } = require('../../../lib')

const getWebsites = (req, res) => {
  const users = store.getData()
  const websites = filter.getWebsites({ users })

  res.send({
    data: websites
  })
}

module.exports = {
  getWebsites
}
