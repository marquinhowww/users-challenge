const containsTextInProperties = ({
  properties = [],
  search,
  data
}) => properties.some(property => {
  const text = data[property]
  return text.toLowerCase().includes(search.toLowerCase())
})

module.exports = {
  containsTextInProperties
}
