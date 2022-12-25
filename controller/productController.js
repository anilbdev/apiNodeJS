
const productService = require('../service/productService')
const constants =require('../constants')
module.exports.createProduct=async (req,res)=>{
    let response ={...constants.defaultServerResponse}
    try {
        const responseFromService = await productService.createProduct(req.body)
        response.status =200
        response.message= constants.productMessage.PRODUCT_CREATED
        response.body = responseFromService
    } catch (error) {
        console.log('Something went wrong : Controller :create Product',error);
        response.message= error.message
    }
    return res.status(response.status).send(response)
}

module.exports.getAllProducts=async (req,res)=>{
    let response ={...constants.defaultServerResponse}
    try {
        const responseFromService = await productService.getAllProducts(req.query)
        response.status =200
        response.message= constants.productMessage.PRODUCT_FETCHED
        response.body = responseFromService
    } catch (error) {
        console.log('Something went wrong : Controller :get all Product',error);
        response.message= error.message
    }
    return res.status(response.status).send(response)
}
module.exports.getProductById=async (req,res)=>{
   
    let response ={...constants.defaultServerResponse}
    try {
        const responseFromService = await productService.getProductById(req.params.id)
        response.status =200
        response.message= constants.productMessage.PRODUCT_FETCHED_ID
        response.body = responseFromService
    } catch (error) {
        console.log('Something went wrong : Controller :get product by ID',error);
        response.message= error.message
    }
    return res.status(response.status).send(response)
}

module.exports.updateProductById=async (req,res)=>{
   
    let response ={...constants.defaultServerResponse}
    try {
        const responseFromService = await productService.updateProductById({
            id:req.params.id,
            updatedInfo:req.body
        })
        response.status =200
        response.message= constants.productMessage.PRODUCT_UPDATED_ID
        response.body = responseFromService
    } catch (error) {
        console.log('Something went wrong : Controller :update product by ID',error);
        response.message= error.message
    }
    return res.status(response.status).send(response)
}

module.exports.deleteProductById=async (req,res)=>{
   
    let response ={...constants.defaultServerResponse}
    try {
        const responseFromService = await productService.deleteProductById(req.params.id)
        response.status =200
        response.message= constants.productMessage.PRODUCT_DELETED_ID
        response.body = responseFromService
    } catch (error) {
        console.log('Something went wrong : Controller :deleted product by ID',error);
        response.message= error.message
    }
    return res.status(response.status).send(response)
}
