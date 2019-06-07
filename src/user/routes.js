const { Router } = require('express')

const {
  getWebsites,
  getInfo,
  getAddress
} = require('./controller')

const userRoutes = Router()

userRoutes.get('/', getInfo)
userRoutes.get('/websites', getWebsites)
userRoutes.get('/address', getAddress)

module.exports = {
  userRoutes
}
