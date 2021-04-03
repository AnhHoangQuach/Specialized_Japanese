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
        const title = req.body.title;
        const image = req.file;
        const price = req.body.price;
        const description = req.body.description

        if (!image) {
            return res.json({status: 400, message: "Attached file is not an image"})
        }

        product.save();
    }

    deleteProduct (req, res, next) {
        const prodId = req.body.productId;
        Product.findByIdAndRemove(prodId).then(() => {
            return res.json({status: 200, message: "Deleted Product"})
        }).catch(err => {
            return res.json({status: 400, message: err.message})
        });
    }

    editProduct (req, res, next) {
        const prodId = req.body.productId;
        const updatedTitle = req.body.title;
        const updatedPrice = req.body.price;
        const updatedImageUrl = req.body.imageUrl;
        const updatedDesc = req.body.description;

        Product.findById(prodId).then(product => {
            product.title = updatedTitle;
            product.price = updatedPrice;
            product.description = updatedDesc;
            product.imageUrl = updatedImageUrl;
            return product.save();
        }).then(result => {
            return res.json({status: 200, message: "Updated Product"})
        }).catch(err => {
            return res.json({status: 400, message: err.message})
        });
    }
}

module.exports = new ProductController