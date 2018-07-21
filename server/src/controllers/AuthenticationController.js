const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/server')

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}


module.exports = {
  async register (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.create({email: email, password: password })
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'User Not Found'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      console.log(isPasswordValid)

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The Password was incorrect'
        })
      }

      console.log("Hell/o")

      const userJson = user.toJSON()

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })

    } catch (err) {
      res.status(500).send({
        error: 'Invalid Login Informtion'
      })
    }
  }
}