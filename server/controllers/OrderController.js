const User = require('../models/UserModels')
const Product = require('../models/ProductModels')

class OrderController {
    postOrder(req, res, next) {
        const userReq = req.body.user
        User.findOne({_id: userReq._id}).populate('cart.items.productId').exec().then(user => {
            const products = user.cart.items.map(i => {
                return {quantity: i.quantity, product: i.productId}
            })
            const order = new Order({
                user: {
                    name: userReq.name,
                    userId: userReq._id,
                },
                products: products,
            })
            if (order.save()) {
                return res.json({status: 200, message: 'Add new order success!'})
            }
        }).catch(err => {
            return res.json({status: 400, message: err.message})
        })
    }
}

module.exports = new OrderController