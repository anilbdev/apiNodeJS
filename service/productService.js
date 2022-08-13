const Product = require('../database/models/productModel')
const { mongoDataFormatter, checkObjectId } = require('../helper/dbHelper')

module.exports.createProduct = async (serviceData) =>
{
    try
    {
        let product = new Product({ ...serviceData })
        let result = await product.save()
        return mongoDataFormatter(result)
    } catch (error)
    {
        console.log('Something went wrong:Services:create product');
        throw new Error(error)
    }
}
module.exports.getAllProducts = async () =>
{
    try
    {

        let products = await Product.find({})

        return mongoDataFormatter(products)
    } catch (error)
    {
        console.log('Something went wrong:Services:get all  products');
        throw new Error(error)
    }
}


module.exports.getProductById = async (id) =>
{
    try
    {
        checkObjectId(id)
        let product = await Product.findById(id)
        if (!product)
        {
            throw new Error('Product not found')
        }
        return mongoDataFormatter(product)
    } catch (error)
    {
        console.log('Something went wrong:Services:create product');
        throw new Error(error)
    }
}
module.exports.updateProductById = async ({id,updatedInfo}) =>
{
    try
    {
        checkObjectId(id )
        let product = await Product.findOneAndUpdate({ _id: id }, updatedInfo, { new: true })
        if (!product)
        {
            throw new Error('Product not found')
        }
        return mongoDataFormatter(product)
    } catch (error)
    {
        console.log('Something went wrong:Services:update product');
        throw new Error(error)
    }
}