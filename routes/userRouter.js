const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const userController = require('../controller/userController');
const productSchema = require('../apiSchema/productSchema');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const { createUserSchema } = require('../apiSchema/userSchema');

router.post('/signup',
    joiSchemaValidation.validateBody(createUserSchema),
    userController.createUser);


module.exports = router;
