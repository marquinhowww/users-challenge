const sort = ({ list = [], property }) => list.sort((a, b) => {
  if (a[property] < b[property]) return -1
  if (a[property] > b[property]) return 1
  return 0
})

module.exports = {
  sort
}
