const express = require('express')
const OrderController = require('../../controllers/OrderController')

const router = express.Router()

router.get('/', OrderController.getOrders)

module.exports = router;