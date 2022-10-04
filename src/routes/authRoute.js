const { login,register, changePassword, registerDelete ,forgetPassword,remember} = require('../controller/authControlLogic')

const express = require('express');
const authenticate = require('../middlewares/authenticate');

const authRoute = express.Router();

authRoute.post('/login', login);
authRoute.post('/register', register);
authRoute.post('/remember',authenticate, remember);
authRoute.post('/changePassword',changePassword);
authRoute.post('/forgetPassword',forgetPassword);
authRoute.post('/registerDelete',registerDelete);

module.exports = authRoute;
