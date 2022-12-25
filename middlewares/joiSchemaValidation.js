const Joi = require('joi')
const constants = require('../constants/index')

const validateObjectSchema = (data,schema)=>{
    const result = schema.validate(data,{ convert: false })
    if(result.error){
        const errorMessage = result.error.details.map(value=>{
            return {
                message:value.message,
                path:value.path
            }
        })
        return errorMessage
    }
    return null

}
module.exports.validateBody =schema=>{
    return (req,res,next)=>{
        let response = {...constants.defaultServerResponse}
        const error = validateObjectSchema(req.body,schema)
        if(error){
            response.body = error
            response.message= 'BAD REQUEST'
            return res.status(response.status).send(response)

        }
        return next()
        
    }
}

module.exports.validateQueryParams =schema=>{
    return (req,res,next)=>{
        let response = {...constants.defaultServerResponse}
        const error = validateObjectSchema(req.query,schema)
        if(error){
            response.body = error
            response.message= 'BAD REQUEST'
            return res.status(response.status).send(response)

        }
        return next()
        
    }
}

module.exports.updateProductValidBody =schema=>{
    return (req,res,next)=>{
        let response = {...constants.defaultServerResponse}
        const error = validateObjectSchema(req.query,schema)
        if(error){
            response.body = error
            response.message= 'BAD REQUEST'
            return res.status(response.status).send(response)

        }
        return next()
        
    }
}