const express = require('express')
var bodyParser = require('body-parser')

const app = express()

const mongoose = require('mongoose')
const url = 'mongodb://localhost/my-db'

mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB Connected...')
});

app.use(express.json())

const alienRouter = require('./routers/aliens.js')
app.use('/aliens',alienRouter)

app.listen(3000, () => {
    console.log("Server started...")
})