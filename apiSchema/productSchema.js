const Joi = require('joi')
module.exports.createProductSchema = Joi.object({
    name:Joi.string().required(),
    brand:Joi.string().required(),
    price:Joi.number().required(),
})

module.exports.getAllProductsSchema = Joi.object({
    skip:Joi.string(),
    limit:Joi.string(),
})

module.exports.updateProductById = Joi.object({
    name:Joi.string(),
    brand:Joi.string(),
    price:Joi.number()
})