const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtvalidator = async (req, res, next) => {
  const token = req.headers['access-token']
  console.log(token)

  if(token){
    jwt.verify(token,process.env.SECRET, (err) => {
      if(err){
        res.json({msg : 'Token invalido'})
      } else {
        next()
      }
    })
  } else {
    res.json({msg : 'Token inexistente'})
  }
}

module.exports = { jwtvalidator }