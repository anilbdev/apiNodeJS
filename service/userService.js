const bcrypt = require('bcrypt')
const User = require('../database/models/userModel')
const constants = require('../constants')
const {mongoDataFormatter} =require('../helper/dbHelper')
module.exports.createUser = async ({email,password})=>{
    try {
        const user = await User.findOne({email,password})
        if(user){
            throw new Error(constants.userMessage.DUPLICATE_USER)
        }
        password = await bcrypt.hash(password,12)

        const newUser = new User({email,password})
        let result = await newUser.save()
        return mongoDataFormatter(result)
        // let result = await user.save()
       
        
    } catch (error) {
        console.log('Something went wrong:Services:create User');
        throw new Error(error)
        
    }
}