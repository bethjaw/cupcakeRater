var express = require('express')
var app = express()
var port = 3000



app.get('/', (req, res) => {
  res.send('yay!')
})


app.listen(port, () => {
  console.log('listeninggg', port)
})
