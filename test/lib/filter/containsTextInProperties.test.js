const test = require('ava')

const { filter } = require('../../../lib')

test('should search in a object', t => {
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
