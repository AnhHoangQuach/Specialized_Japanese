const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['admin', 'customer'],
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    },
    cart: {
        items: [
            {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                quantity: { type: Number, required: true }
            }
        ]
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)