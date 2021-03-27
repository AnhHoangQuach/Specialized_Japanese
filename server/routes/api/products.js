const express = require('express')
const ProductController = require('../../controllers/ProductController')

const router = express.Router()

router.post('/', ProductController.getProducts)

module.exports = router;