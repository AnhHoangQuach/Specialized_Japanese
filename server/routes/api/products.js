const express = require('express')
const ProductController = require('../../controllers/ProductController')

const router = express.Router()

router.get('/', ProductController.getProducts)

router.get('/:productId', ProductController.getProduct)
router.post('/edit-product', ProductController.editProduct)
router.post('/delete-product', ProductController.deleteProduct)

module.exports = router;