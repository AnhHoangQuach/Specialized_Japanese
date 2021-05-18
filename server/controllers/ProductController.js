const User = require("../models/UserModels")
const Product = require("../models/ProductModels")
const ITEMS_PER_PAGE = 10
class ProductController {
    getProducts(req, res, next) {
        const page = +req.query.page || 1
        let totalItems
        Product.find()
            .countDocuments()
            .then((numProducts) => {
                totalItems = numProducts
                return Product.find()
                    .skip((page - 1) * ITEMS_PER_PAGE)
                    .limit(ITEMS_PER_PAGE)
            })
            .then((products) => {
                return res.json({
                    products: products,
                    status: 200,
                    message: "Success",
                })
            })
            .catch((err) => {
                return res.json({ status: 500, message: err.message })
            })
    }

    getProduct(req, res, next) {
        const prodId = req.params.productId
        Product.findById(prodId)
            .then((product) => {
                return res.json({
                    product: product,
                    status: 200,
                    message: "Success",
                })
            })
            .catch((err) => {
                return res.json({ status: 400, message: err.message })
            })
    }

    addProduct(req, res, next) {
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description
        const place = req.body.place

        if (!image) {
            return res.json({
                status: 400,
                message: "Attached file is not an image",
            })
        }

        const product = new Product({
            name: name,
            price: price,
            description: description,
            imageUrl: image,
            place: place,
            userId: req.body.userId,
        })

        product
            .save()
            .then((result) => {
                return res.json({ status: 200, message: "Created Product" })
            })
            .catch((err) => {
                return res.json({ status: 400, message: err.message })
            })
    }

    deleteProduct(req, res, next) {
        const prodId = req.body.productId
        Product.deleteById(prodId)
            .then(() => {
                return res.json({ status: 200, message: "Deleted Product" })
            })
            .catch((err) => {
                return res.json({ status: 400, message: err.message })
            })
    }

    editProduct(req, res, next) {
        const prodId = req.body.productId
        const updatedTitle = req.body.title
        const updatedPrice = req.body.price
        const updatedImageUrl = req.body.imageUrl
        const updatedDesc = req.body.description

        Product.findById(prodId)
            .then((product) => {
                product.title = updatedTitle
                product.price = updatedPrice
                product.description = updatedDesc
                product.imageUrl = updatedImageUrl
                return product.save()
            })
            .then((result) => {
                return res.json({ status: 200, message: "Updated Product" })
            })
            .catch((err) => {
                return res.json({ status: 400, message: err.message })
            })
    }

    getProductsByUser(req, res, next) {
        User.findOne({ _id: req.params.userId }, (err, user) => {
            if (user == null) {
                return res.json({ status: 404, message: "User is not existed" })
            } else if (err) {
                return res.json({ status: 404, message: err.message })
            } else {
                Product.find({ userId: user._id }).then((products) => {
                    return res.json({
                        status: 200,
                        message: "Get Product By User Id Success",
                        products: products,
                    })
                })
            }
        })
    }

    postCart(req, res, next) {
        const prodId = req.body.productId
        Product.findById(prodId)
            .then((product) => {
                User.findById(req.body.userId).then((user) => {
                    return user.addToCart(product)
                })
            })
            .then((result) => {
                return res.json({
                    status: 200,
                    message: "Add To Cart Success",
                    result: result,
                })
            })
            .catch((err) => {
                return res.json({ status: 400, message: err.message })
            })
    }

    getCart(req, res, next) {
        const user = req.body.user
        User.findOne({ _id: user._id })
            .populate("cart.items.productId")
            .exec()
            .then((user) => {
                const products = user.cart.items
                return res.json({
                    status: 200,
                    message: "Get Order Cart Success",
                    products: products,
                })
            })
            .catch((err) => {
                return res.json({ status: 400, message: err.message })
            })
    }

    postCartDeleteProduct(req, res, next) {
        const prodId = req.body.productId
        const user = req.body.user
        User.findOne({ _id: user._id }).then((data) => {
            data.removeFromCart(prodId)
                .then((result) => {
                    return res.json({
                        status: 200,
                        message: "Delete Product Cart Success",
                        result: result,
                    })
                })
                .catch((err) => {
                    return res.json({ status: 400, message: err.message })
                })
        })
    }

    addMultiProduct(req, res, next) {
        const quantity = req.body.quantity
        const product = req.body.product
        console.log(product)
        User.findById(req.body.userId).then((user) => {
            user.cart.items.forEach((item, index) => {
                console.log(item)
                if (item.productId == product.productId._id) {
                    item.quantity = quantity
                }
            })
            user.save((err, result) => {
                if (err) {
                    return res.json({
                        message: err.message,
                        status: 404,
                        email: result.email,
                    })
                }
                res.json({
                    message: "Save success",
                    status: 200,
                    user: user,
                })
            })
        })
    }
}

module.exports = new ProductController()
