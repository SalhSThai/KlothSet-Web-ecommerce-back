const { login,register, changePassword, registerDelete ,forgetPassword,remember} = require('../controller/authControlLogic');
const {  AuthShopInfo ,AuthShopPath,AuthShopUploadCarousal} = require('../controller/authShopControlLogic')


const express = require('express');
const authenticate = require('../middlewares/authenticate');
const upload = require('../middlewares/upload');


const authRoute = express.Router();

authRoute.post('/login', login);
authRoute.post('/register', register);
authRoute.post('/remember',authenticate, remember);
authRoute.post('/changePassword',changePassword);
authRoute.post('/forgetPassword',forgetPassword);
authRoute.post('/registerDelete',registerDelete);

authRoute.post('/fetchAuthShop/:userId',authenticate,AuthShopInfo);
authRoute.post('/fetchAuthPath/:userId',authenticate,AuthShopPath);
authRoute.post('/carousalShop/:shopId',authenticate,upload.single('shopCarousalImage'),AuthShopUploadCarousal);
module.exports = authRoute;
