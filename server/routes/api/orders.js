const express = require('express')
const OrderController = require('../../controllers/OrderController')

const router = express.Router()

router.get('/', OrderController.getProducts)

module.exports = router;