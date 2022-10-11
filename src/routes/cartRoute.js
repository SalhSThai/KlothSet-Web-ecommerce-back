const {updateter, fetchAllProduct,getProductOut,addCartProduct} = require('../controller/cartLogic')

const express = require('express');
const authenticate = require('../middlewares/authenticate');
const upload = require('../middlewares/upload');

const cartRoute = express.Router();

cartRoute.post('/add',authenticate, addCartProduct);
cartRoute.post('/fetch/:userId',authenticate, fetchAllProduct);
cartRoute.post('/delete/:userId',authenticate, getProductOut);




module.exports = cartRoute;
