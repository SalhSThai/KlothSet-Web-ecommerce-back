const { fetchAllProduct,getProductOut,addCartProduct,buyProduct} = require('../controller/cartLogic')

const express = require('express');
const authenticate = require('../middlewares/authenticate');
const upload = require('../middlewares/upload');

const cartRoute = express.Router();

cartRoute.post('/add',authenticate, addCartProduct);
cartRoute.post('/fetch/:userId',authenticate, fetchAllProduct);


module.exports = cartRoute;
