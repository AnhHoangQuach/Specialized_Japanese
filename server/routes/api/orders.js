const express = require('express')
const OrderController = require('../../controllers/OrderController')

const router = express.Router()

router.post('/create', OrderController.postOrder)

module.exports = router;