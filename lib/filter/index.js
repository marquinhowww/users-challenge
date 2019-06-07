const { containsTextInProperties } = require('./containsTextInProperties')
const { getWebsites } = require('./getWebsites')
const { searchInAddress } = require('./searchInAddress')
const { sort } = require('./sort')

module.exports = {
  filter: {
    getWebsites,
    searchInAddress,
    containsTextInProperties,
    sort
  }
}
