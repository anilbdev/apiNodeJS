const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../database/models/userModel');
const constants = require('../constants');
const { mongoDataFormatter } = require('../helper/dbHelper');
module.exports.createUser = async ({ email, password }) =>
{
    try
    {
        const user = await User.findOne({ email });
        if (user)
        {
            throw new Error(constants.userMessage.DUPLICATE_USER);
        }
        password = await bcrypt.hash(password, 12);
        const newUser = new User({ email, password });
        let result = await newUser.save();
        return mongoDataFormatter(result);
        // let result = await user.save()
    } catch (error)
    {
        console.log('Something went wrong:Services:create User');
        throw new Error(error);
    }
};
module.exports.loginUser = async ({ email, password }) =>
{
    try
    {
        const user = await User.findOne({ email });
        if (!user)
        {
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        const isValid =await bcrypt.compare(password,user.password)
        if(!isValid){
            throw new Error(constants.userMessage.INVALID_PASSWORD)
        }
        let tocken = jwt.sign({id:user._id},process.env.SECRER_KEY || 'MY-KEY',{expiresIn:300})
        return {tocken}
    } catch (error)
    {
        console.log('Something went wrong:Services:login User');
        throw new Error(error);
    }
}

