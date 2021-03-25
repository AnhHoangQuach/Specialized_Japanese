const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

router.post('/register', async (req, res, next) => {
    res.send({
        message: `Hello ${req.body.email} register is successful`
    })
})

module.exports = router;