const { env } = process

const config = {
  APP_PORT: env.APP_PORT || 3000,
  DATA_URL: 'https://jsonplaceholder.typicode.com/users'
}

module.exports = {
  config
}
