console.log('Starting Server')

const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const morgan     = require('morgan')
const { sequelize }  = require('./models')

const serverConfig = require('./config/server')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(serverConfig.port)
    console.log(`Server started on port ${serverConfig.port}`)
  })
