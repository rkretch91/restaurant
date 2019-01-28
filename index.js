const path = require('path')
const bodyParser = require('body-parser')

const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose
  .connect(`mongodb://localhost:27017/restaurant`, { useNewUrlParser: true })
  .then(console.log('Successful'))
  .catch(error => {
    console.error(`Fuck! ${error.message}`)
    process.exit(1)
  })

const BookController = require('./controllers/bookcontroller')

app.use(express.static('./node_modules'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/addbook', BookController.createBook)
app.listen(3000)
