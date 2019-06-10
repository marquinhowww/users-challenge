const { env } = process

const config = {
  APP_PORT: env.APP_PORT || 3000,
  DATA_URL: 'https://jsonplaceholder.typicode.com/users',
  ELASTIC_SEARCH_URL: env.ELASTIC_SEARCH_URL || 'http://localhost:9200'
}

module.exports = {
  config
}
