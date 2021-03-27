const morgan = require('morgan')
const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')

const app = express()
const port = process.env.PORT || 3000
const db = mongoose.connection

dotenv.config({path: path.join(__dirname, '.env')})

//connect db
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(() => console.log('DB Connected!'));
db.on('error', err => {
    console.log('DB connection error: ', err.message)
})

//HTTP logger
app.use(morgan('combined'))

// Middleware
app.use(cors())
app.use(express.json());
app.use(expressValidator())

app.use( (req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
})

// const users = require('./routes/api/users')

// app.use('/api/users', users)

const route = require('./routes/api')

// Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})