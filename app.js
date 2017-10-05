var express = require('express')
var app = express()
var port = 3000
const cupcakes = require('./data/cupcakes')

app.set('view engine', 'hbs')

app.get('/cupcakes/')

app.get('/', (req, res) => {
  res.render('index', {
    title: "Cupcake Reviews",
    cupcakes: cupcakes
  })
})



app.listen(port, () => {
  console.log('listeninggg', port)
})
