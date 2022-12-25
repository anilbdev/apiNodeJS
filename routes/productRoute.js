const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const productSchema = require('../apiSchema/productSchema');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const authorization = require("../middlewares/validateTocken");

router.post('/',
    authorization.validateTocken,
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct);

router.get('/',
    authorization.validateTocken,
    joiSchemaValidation.validateQueryParams(productSchema.getAllProductsSchema),
    productController.getAllProducts);
router.get('/:id',
    authorization.validateTocken,
    productController.getProductById);
router.put('/:id',
    authorization.validateTocken,
    joiSchemaValidation.updateProductValidBody(productSchema.updateProductById),
    productController.updateProductById);

router.delete('/:id',
    authorization.validateTocken,
    productController.deleteProductById);

module.exports = router;
