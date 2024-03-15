const userController = require('../Controllers/userController')
const authMiddleware = require('../Middlewares/authMiddleware')


const route = require('express').Router()

route.get('/get-all-user',userController.getAllUser)
route.delete('/delete-user/:id',authMiddleware.deleteUser, userController.deleteUser)

module.exports = route