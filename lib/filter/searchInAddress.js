const { containsTextInProperties } = require('./containsTextInProperties')

const searchInAddress = ({
  users = [],
  properties,
  search
}) =>
  users.filter(user => containsTextInProperties({
    data: user.address,
    properties,
    search
  }))

module.exports = {
  searchInAddress
}
