const { setDefault} = require('../controller/defaultControlLogic')

const express = require('express');
const authenticate = require('../middlewares/authenticate');

const defaultRoute = express.Router();

defaultRoute.post('/setAll', setDefault);

module.exports = defaultRoute;
