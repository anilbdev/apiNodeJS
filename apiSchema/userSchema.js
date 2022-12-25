const Joi = require('joi')
module.exports.createUserSchema = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required(),
})
module.exports.loginUserSchema = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required(),
})
