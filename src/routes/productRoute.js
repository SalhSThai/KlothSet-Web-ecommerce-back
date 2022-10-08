const { createProduct,putpicture} = require('../controller/uploadLogic')

const express = require('express');
const authenticate = require('../middlewares/authenticate');
const upload = require('../middlewares/upload');

const productRoute = express.Router();

productRoute.post('/picture',upload.single('image'), putpicture);
productRoute.post('/create',authenticate,upload.single('profileProductImage'), createProduct);
module.exports = productRoute;
