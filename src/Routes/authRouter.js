const authController = require('../Controllers/authController')


const route = require('express').Router()

route.post('/register', authController.rigisterUser)
route.post('/login', authController.loginUser)

module.exports = route