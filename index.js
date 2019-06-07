const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const { logger } = require('./lib')
const { config } = require('./config')

const { userRoutes } = require('./src/user/routes')

const { store } = require('./src/store')

const app = express()

app.use(bodyParser.json())
app.use(helmet())

app.use('/user', userRoutes)

store
  .updateData()
  .then(_ => app.listen(config.APP_PORT, () => {
    logger.info(`running on ${config.APP_PORT}`)
  }))
