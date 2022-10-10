const { createProduct,putpicture,deletedProduct,editProduct} = require('../controller/productLogic')

const express = require('express');
const authenticate = require('../middlewares/authenticate');
const upload = require('../middlewares/upload');

const productRoute = express.Router();

productRoute.post('/picture',upload.single('image'), putpicture);
productRoute.post('/create',authenticate,upload.single('profileProductImage'), createProduct);
productRoute.delete('/delete/:productId/:userId',authenticate,deletedProduct);
productRoute.post('/edit/',authenticate,editProduct);

module.exports = productRoute;
