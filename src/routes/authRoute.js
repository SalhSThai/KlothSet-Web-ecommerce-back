const { login,register, changePassword, registerDelete ,forgetPassword,remember,changeProfilePicLogic,changeCoverPicLogic} = require('../controller/authControlLogic');
const {  AuthShopInfo ,AuthShopPath} = require('../controller/authShopControlLogic')


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

authRoute.post('/changeProfilePic/:userId',authenticate,upload.single('profileImage'),changeProfilePicLogic)
authRoute.post('/fetchAuthShop/:userId',authenticate,AuthShopInfo);
authRoute.post('/fetchAuthPath/:userId',authenticate,AuthShopPath);
authRoute.post('/changeCover/:userId',authenticate,upload.single('coverImage'),changeCoverPicLogic);
module.exports = authRoute;
