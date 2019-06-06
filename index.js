const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const { logger } = require('./lib')
const { config } = require('./config')

const { userRoutes } = require('./src/user/routes')

const app = express()

app.use(bodyParser.json())
app.use(helmet())

app.use('/user', userRoutes)

app.listen(config.APP_PORT, function () {
  logger.info(`running on ${config.APP_PORT}`)
})
