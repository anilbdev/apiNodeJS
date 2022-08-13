const mongoose =require('mongoose')
module.exports.mongoDataFormatter = (data)=>{
    let newDataList =[]
    if(Array.isArray(data)){
        for (value of data){
            newDataList.push(value.toObject())
        }
        return newDataList
    }
    return data.toObject()
}

module.exports.checkObjectId =id =>{
    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new Error('Invalid object ID')
    }
}