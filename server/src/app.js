console.log('Starting Server')

const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const morgan     = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'HelloWorld'
  })
})

app.post('/register', (req, res) => {
  console.log(req.body)
  res.send({
    message: `Hello ${req.body.email}. Have fun`
  })
})

app.listen(process.env.PORT || 8081)
