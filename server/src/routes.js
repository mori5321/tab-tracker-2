const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'HelloWorld'
    })
  })

  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register,
  )
}