const Product = require('../models/ProductModels')
const ITEMS_PER_PAGE = 2;
class ProductController {
    getProducts (req, res, next) {
        const page = +req.query.page || 1;
        let totalItems;
        Product.find()
        .countDocuments()
        .then(numProducts => {
            totalItems = numProducts;
            return Product.find().skip((page - 1) * ITEMS_PER_PAGE).limit(ITEMS_PER_PAGE);
        })
        .then(products => {
            return res.json({products: products, status: 200, message: "Success"})
        })
        .catch(err => {
            return res.json({status: 500, message: "Failed"})
        });
    }

    getProduct (req, res, next) {
        const prodId = req.params.productId;
        Product.findById(prodId).then(product => {
            return res.json({product: product, status: 200, message: "Success"}) 
        }).catch(err => {
            return res.json({status: 400, message: "Failed"})
        });
    }

    addProduct (req, res, next) {
        
    }

    deleteProduct (req, res, next) {

    }

    editProduct (req, res, next) {
        
    }
}

module.exports = new ProductController