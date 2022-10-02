//=====================================================Imported Zone
const express = require('express');
const cors = require('cors');

//=====================================================Imported Zone
//=====================================================constance & local imported Zone
const errFn = require('./middlewares/error');
const notFound = require('./middlewares/notFound')
const authRoute = require('./routes/authRoute');
const { sequelize } = require('./models');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;
//=====================================================constance & local imported Zone
//=====================================================Encoding Zone
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//=====================================================Encoding Zone
//=====================================================Express Zone
app.use('/auth', authRoute)
// app.use('/todos', authenticate, todosRoute)
//=====================================================Express Zone
//=====================================================Throwing Zone
app.use(notFound);
app.use(errFn);
//=====================================================Listening Zone
app.listen(PORT,()=>{console.log(`PORT:[${PORT}] Server is running...`);});