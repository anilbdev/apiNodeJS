const constants = require("../constants");
const userService = require("../service/userService");

module.exports.createUser = async (req, res) =>
{
    let response = { ...constants.defaultServerResponse };

    try
    {
        const responseFromService =await userService.createUser(req.body);
        response.status = 200;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body = responseFromService;

    } catch (error)
    {
        console.log('Something went wrong : Controller :Signup', error);
        response.message = error.message;

    }
    return res.status(response.status).send(response)
};