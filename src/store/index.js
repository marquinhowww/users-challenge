const { config } = require('../../config')
const { http } = require('../../lib')

let data = {}

const updateData = async () => {
  const response = await http({
    method: 'GET',
    url: config.DATA_URL
  })

  data = response.data
}

const getData = () => {
  return data
}

module.exports = {
  store: {
    updateData,
    getData
  }
}
