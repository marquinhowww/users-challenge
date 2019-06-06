const getWebsites = ({ users = [] } = {}) =>
  users.map(user => user.website)

const containsTextInProperties = ({
  properties = [],
  search,
  data
}) => properties.some(property => {
  const text = data[property]
  return text.toLowerCase().includes(search.toLowerCase())
})

const searchInAddress = ({ users = [], text } = {}) =>
  users.filter(user => user.address && user.address.street.includes(text))

module.exports = {
  filter: {
    getWebsites,
    searchInAddress,
    containsTextInProperties
  }
}
