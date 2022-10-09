//=====================================================Imported Zone
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

//=====================================================Imported Zone
//=====================================================constance & local imported Zone
const errFn = require('./middlewares/error');
const notFound = require('./middlewares/notFound')
const authRoute = require('./routes/authRoute');
const { sequelize,Product } = require('./models');
const Sequelize = require('./models');
// Sequelize.sequelize.sync({ force: true }) ;
// Sequelize.sequelize.sync({ alter: true }) ;

const defaultRoute = require('./routes/defaultRoute');
const uploadRoute = require('./routes/productRoute');
const dataRoute = require('./routes/dataRoute');
const productRoute = require('./routes/productRoute');
// const db = require('./models');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;
//=====================================================constance & local imported Zone
//=====================================================Encoding Zone

app.use(morgan("dev"))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//=====================================================Encoding Zone
//=====================================================Express Zone
app.use('/auth', authRoute)
app.use('/data',dataRoute)
app.use('/default',defaultRoute)
app.use('/product',productRoute)
//=====================================================Express Zone
//=====================================================Throwing Zone
app.use(notFound);
app.use(errFn);
//=====================================================Listening Zone
app.listen(PORT,()=>{console.log(`PORT:[${PORT}] Server is running...`);});