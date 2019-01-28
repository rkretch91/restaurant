const path = require('path')
const bodyParser = require('body-parser')

const express = require('express')
const app = express()

const mongoose = require('mongoose')
var restaurants = require('./routes/restaurants');

mongoose
  .connect(`mongodb://heroku_47btg4fx:81ian567b5p4l8hiqkrqiaph7m@ds213705.mlab.com:13705/heroku_47btg4fx`, { useNewUrlParser: true })
  .then(console.log('Successful'))
  .catch(error => {
    console.error(`Fuck! ${error.message}`)
    process.exit(1)
  })

const BookController = require('./controllers/bookcontroller')

app.use(express.static('./node_modules'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/restaurants', restaurants);


app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

// app.post('/addbook', BookController.createBook)

app.listen(process.env.PORT || 3000)
