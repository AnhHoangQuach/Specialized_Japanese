const userRouter = require('./users')
const productRouter = require('./products')
function route(app) {
    app.use('/api/users', userRouter)
    app.use('/api/products', productRouter)
}

module.exports = route