const { login,register, changePassword, registerDelete ,forgetPassword} = require('../controller/authControlLogic')

const express = require('express');

const authRoute = express.Router();

authRoute.post('/login', login);
authRoute.post('/register', register);
authRoute.post('/changePassword',changePassword);
authRoute.post('/forgetPassword',forgetPassword);
authRoute.post('/registerDelete',registerDelete);

module.exports = authRoute;
