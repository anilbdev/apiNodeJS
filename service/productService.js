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
module.exports.getAllProducts = async ({skip = 0,limit = 10}) =>
{
    try
    {

        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit))

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
        console.log('Something went wrong:Services:get product by ID');
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
module.exports.deleteProductById = async (id) =>
{
    try
    {
        checkObjectId(id )
        let product = await Product.findByIdAndDelete(id)
        if (!product)
        {
            throw new Error('Product not found')
        }
        return mongoDataFormatter(product)
    } catch (error)
    {
        console.log('Something went wrong:Services:delete product');
        throw new Error(error)
    }
}