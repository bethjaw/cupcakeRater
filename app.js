const express = require('express')
const app = express()
const port = 3000
const cupcakes = require('./data/cupcakes')
const cakeQueries = require('./data/cakeQueries')

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Cupcake Reviews!',
    cupcakes: cupcakes
  })
})

app.get('/cupcakes/:id', (req, res) => {
  const id = Number(req.params.id);
  const oneCupcake = cakeQueries.getOneCupcake(id)

  res.render('oneCupcake', {
    title: 'Cupcake rating for ' + oneCupcake.flavor,
    oneCupcake: oneCupcake
  })
})


app.listen(port, () => {
  console.log('listeninggg', port)
})
