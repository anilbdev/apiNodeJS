const Joi = require('joi')
module.exports.createUserSchema = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required(),
})
