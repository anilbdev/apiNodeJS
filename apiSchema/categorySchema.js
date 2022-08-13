const Joi = require('joi')
module.exports.getCategorySchema = Joi.object({
    name:Joi.string().required(),
    brand:Joi.string().required(),
    price:Joi.number().required(),
})