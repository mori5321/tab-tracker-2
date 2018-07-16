const { User } = require('../models')

module.exports = {
  async register(req, res) {
    try {
      const { email, password } = req.body
      const user = await User.create({email: email, password: password })
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
    res.send({
      message: `Hello ${req.body.email}. Have Fun!`
    })
  }
}