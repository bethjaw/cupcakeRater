const express = require('express')
const app = express()
const port = 3000
const cupcakes = require('./data/cupcakes')
const cakeQueries = require('./data/cakeQueries')
const bodyParser = require('body-parser')

app.set('view engine', 'hbs')
app.use(express.static('public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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

app.post('/cupcakes/cupcakes/rating/:id', (req,res) => {
  const id = Number(req.params.id)
  const vote = Number(req.body.vote)
  cakeQueries.addVote(id, vote)

  res.redirect('/')
})


app.listen(port, () => {
  console.log('listeninggg', port)
})
