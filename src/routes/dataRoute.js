const { fetchPath,fetchShopData,fetchCategoryData,fetchShopPath} = require('../controller/DataControlLogic')

const express = require('express');
const authenticate = require('../middlewares/authenticate');

const dataRoute = express.Router();

dataRoute.get('/fetchPath', fetchPath);
dataRoute.post('/fetchShopData/:shopPath',authenticate, fetchShopData);
dataRoute.post('/fetchShopPath/:userId',authenticate, fetchShopPath);
dataRoute.post('/fetchCategoryData/:shopId',authenticate, fetchCategoryData);


module.exports = dataRoute;
