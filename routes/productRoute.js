const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const productSchema = require('../apiSchema/productSchema');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');

router.post('/',
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct);

router.get('/',
    joiSchemaValidation.validateQueryParams(productSchema.getAllProductsSchema),
    productController.getAllProducts);
router.get('/:id',
    productController.getProductById);
router.put('/:id',
    joiSchemaValidation.updateProductValidBody(productSchema.updateProductById),
    productController.updateProductById);

router.delete('/:id',
    productController.deleteProductById);

module.exports = router;
