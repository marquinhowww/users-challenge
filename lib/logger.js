const { config } = require('../config')
const { Client } = require('@elastic/elasticsearch')

const winston = require('winston')
const Elasticsearch = require('winston-elasticsearch')
const expressWinston = require('express-winston')

const client = new Client({
  node: config.ELASTIC_SEARCH_URL
})

const esTransportOpts = {
  level: 'info',
  client
}

const loggerConfig = {
  transports: [
    new Elasticsearch(esTransportOpts),
    new winston.transports.Console()
  ]
}

const logger = winston.createLogger(loggerConfig)

module.exports = {
  logger,
  loggerMiddleware: expressWinston.logger(loggerConfig)
}
