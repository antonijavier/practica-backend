const User = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const loginUser = async (req,res) =>{
  const { email, password } = req.body
  
  const searchEmail = await User.find({email: email})
  const match = bcrypt.compareSync(password, searchEmail[0].password)

  if(match){
    const payload = {
      check: email
    }
    const token = jwt.sign(payload,process.env.SECRET, {
      expiresIn: 1440
    })

    res.status(200).json({msg:'Usuario logueado exitosamente', token: token}) 
  } else {
    res.status(401).json({msg:'Usuario o contraseña invalidos'})
  }
}

module.exports = { loginUser }