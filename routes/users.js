const { Router } = require('express')
const { createUser , getUsers } = require('../controllers/users')
const { jwtvalidator } = require('../middelware/jwtvalidator')
const route = Router()

route.get('/users', jwtvalidator, getUsers)
route.post('/users', createUser)

module.exports = route 