const getWebsites = ({ users = [] } = {}) =>
  users.map(user => user.website)

module.exports = {
  filter: {
    getWebsites
  }
}
