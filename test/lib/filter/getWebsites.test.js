const test = require('ava')

const users = require('../../assets/data.json')
const { filter } = require('../../../lib')

test('should return the websites', t => {
  const expected = ['hildegard.org', 'anastasia.net', 'ramiro.info']
  const result = filter.getWebsites({ users })
  t.deepEqual(expected, result)
})
