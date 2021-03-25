const Joi = require('@hapi/joi');


const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  username: Joi.string().min(3).required(),
  role: Joi.string().required() 
})

const authLogin =  Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  })

module.exports = {authSchema, authLogin}