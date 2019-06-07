const { containsTextInProperties } = require('./containsTextInProperties')
const { getWebsites } = require('./getWebsites')
const { searchInAddress } = require('./searchInAddress')
const { sortByNameEmailAndAddress } = require('./sortByNameEmailAndAddress')

module.exports = {
  filter: {
    getWebsites,
    searchInAddress,
    containsTextInProperties,
    sortByNameEmailAndAddress
  }
}
