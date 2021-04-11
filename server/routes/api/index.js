const userRouter = require('./users')
const productRouter = require('./products')
const orderRouter = require('./orders')
function route(app) {
    app.use('/api/users', userRouter)
    app.use('/api/products', productRouter)
    app.use('/api/orders', orderRouter)
}

module.exports = route