const express = require('express');
const productController = require('../controller/productController');
const userController = require('../controller/userController');
const productSchema = require('../apiSchema/productSchema');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const { createUserSchema, loginUserSchema } = require('../apiSchema/userSchema');

const router = express.Router();

router.post('/signup',
    joiSchemaValidation.validateBody(createUserSchema),
    userController.createUser);

router.post('/login',
    joiSchemaValidation.validateBody(loginUserSchema),
    userController.loginUser
);
module.exports = router;
