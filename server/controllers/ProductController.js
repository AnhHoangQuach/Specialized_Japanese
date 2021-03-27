const Product = require('../models/ProductModels')

class ProductController {
    getProducts (req, res, next) {
        console.log('hello')
    }
}

module.exports = new ProductController