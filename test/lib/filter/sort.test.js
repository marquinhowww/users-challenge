const test = require('ava')
const { filter } = require('../../../lib')

test('should sort by property', t => {
  const expected = [
    { name: 'a' },
    { name: 'b' },
    { name: 'c' }
  ]

  const result = filter.sort({ list: [
    { name: 'c' },
    { name: 'a' },
    { name: 'b' }
  ],
  property: 'name'
  })

  t.deepEqual(expected, result)
})
