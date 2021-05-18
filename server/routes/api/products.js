const express = require("express")
const ProductController = require("../../controllers/ProductController")

const router = express.Router()

router.get("/", ProductController.getProducts)

router.get("/:productId", ProductController.getProduct)

router.get("/users/:userId", ProductController.getProductsByUser)

router.post("/cart", ProductController.postCart)

router.post("/get-cart", ProductController.getCart)

router.post("/cart-delete-item", ProductController.postCartDeleteProduct)

router.post("/add-product", ProductController.addProduct)

router.post("/edit-product", ProductController.editProduct)

router.delete("/delete-product", ProductController.deleteProduct)

router.post("/add-multi-product", ProductController.addMultiProduct)

module.exports = router
