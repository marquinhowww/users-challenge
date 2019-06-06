const test = require('ava')

const users = require('../assets/data.json')

const { filter } = require('../../lib')

test('getWebsites // should return the websites', t => {
  const expected = ['hildegard.org', 'anastasia.net', 'ramiro.info']
  const result = filter.getWebsites({ users })
  t.deepEqual(expected, result)
})

test('containsTextInProperties // should search in a object', t => {
  t.true(filter.containsTextInProperties({
    properties: ['street', 'suite', 'city'],
    data: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough'
    },
    search: 'light'
  }))

  t.true(filter.containsTextInProperties({
    properties: ['street', 'suite', 'city'],
    data: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough'
    },
    search: 'apt'
  }))

  t.true(filter.containsTextInProperties({
    properties: ['street', 'suite', 'city'],
    data: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough'
    },
    search: 'gwenBoroUgh'
  }))

  t.false(filter.containsTextInProperties({
    properties: ['street', 'suite', 'city'],
    data: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough'
    },
    search: 'Batata'
  }))
})
