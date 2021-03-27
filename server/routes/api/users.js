const express = require('express')
const UserController = require('../../controllers/UserController')
const {UserValidator} = require('../../validators/validator')

const router = express.Router()

router.post('/register', UserValidator, UserController.register)

router.post('/login', UserController.login)

module.exports = router;