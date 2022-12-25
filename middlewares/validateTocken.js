const constants = require('../constants');
const jwt = require('jsonwebtoken');

module.exports.validateTocken = (req, res, next) =>
{
    const response = constants.defaultServerResponse;
    try
    {
        if (!req.headers.authorization)
        {
            throw new Error(constants.requestValidationMessage.TOCKEN_MISSING);
        }
        const tocken = req.headers.authorization.split(" ")[1]
        jwt.verify(tocken,process.env.SECRER_KEY || 'my-key')
        return next()

    } catch (error)
    {
        console.log('Tocken validation',error);
        response.status = 401;
        response.message = error.message
    }
    return res.status(response.status).send(response)
};