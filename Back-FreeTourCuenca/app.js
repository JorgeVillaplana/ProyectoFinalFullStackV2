const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const routes = require('./src/routes/routes')
const connection = require('./src/connection')
const passport = require('passport')
const app = express()
const path = require('path')

app.use(express.static((path.join(__dirname, './public'))))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(passport.initialize())

connection.then(() => {
    console.log('DB connection success')

    app.listen(3000, () => {
        console.log("Server initialized")
    })
}).catch(function(err) {
    console.log(`$(err) Error attempting to connect to database`)
})

app.use(routes)