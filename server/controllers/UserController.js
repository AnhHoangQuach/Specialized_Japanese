const User = require('../models/UserModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function jwtSignUser(user) {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET, {
        expiresIn: 86400
    })
}

class UserController {
    register (req, res, next) {
        User.findOne({email: req.body.email}, (err, user) => {
            if (user == null) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return next(err);
                    }
                    const user = new User(req.body)
                    user.role = 'customer'
                    user.password = hash
                    user.save((err, result) => {
                        if (err) {
                            return res.json({message: err.message, status: 404, email: result.email})
                        }
                        res.json({message: "Register success", status: 200})
                    })
                })
            } else {
                res.json({message: 'Email has been used', status: 404})
            }
        })
    }

    login (req, res, next) {
        User.findOne({email: req.body.email}, (err, user) => {
            if (user == null) {
                return res.json({status: 404, message: 'User is not existed'})
            } else if (err) {
                return res.json({status: 404, message: err.message})
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (result == true) {
                    return res.json({user: user, token: jwtSignUser(user), status: 200, message: "Login Success"})
                } else {
                    return res.json({status: 404, message: 'Username and Password are incorrect'})
                }
            })
        })
    }
}

module.exports = new UserController