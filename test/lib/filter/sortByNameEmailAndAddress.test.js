const test = require('ava')

const { filter } = require('../../../lib')

test('should sort by name', t => {
  const expected = [
    { name: 'a', email: 'a', company: { name: 'a' } },
    { name: 'b', email: 'b', company: { name: 'b' } },
    { name: 'c', email: 'c', company: { name: 'c' } }
  ]

  const result = filter.sortByNameEmailAndAddress({
    users: [
      { name: 'b', email: 'b', company: { name: 'b' } },
      { name: 'a', email: 'a', company: { name: 'a' } },
      { name: 'c', email: 'c', company: { name: 'c' } }
    ]
  })

  t.deepEqual(expected, result)
})

test('should sort by name and email', t => {
  const expected = [
    { name: 'a', email: 'a', company: { name: 'a' } },
    { name: 'a', email: 'b', company: { name: 'b' } },
    { name: 'a', email: 'c', company: { name: 'c' } }
  ]

  const result = filter.sortByNameEmailAndAddress({
    users: [
      { name: 'a', email: 'b', company: { name: 'b' } },
      { name: 'a', email: 'a', company: { name: 'a' } },
      { name: 'a', email: 'c', company: { name: 'c' } }
    ]
  })

  t.deepEqual(expected, result)
})

test('should sort by name, email and company name', t => {
  const expected = [
    { name: 'a', email: 'b', company: { name: 'a' } },
    { name: 'a', email: 'b', company: { name: 'b' } },
    { name: 'a', email: 'b', company: { name: 'c' } }
  ]

  const result = filter.sortByNameEmailAndAddress({
    users: [
      { name: 'a', email: 'b', company: { name: 'c' } },
      { name: 'a', email: 'b', company: { name: 'a' } },
      { name: 'a', email: 'b', company: { name: 'b' } }
    ]
  })

  t.deepEqual(expected, result)
})
