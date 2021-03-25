const morgan = require('morgan')
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

//HTTP logger
app.use(morgan('combined'))

// Middleware
app.use(cors())
app.use(express.json());

// const users = require('./routes/api/users')

// app.use('/api/users', users)

const route = require('./routes/api')

// Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})