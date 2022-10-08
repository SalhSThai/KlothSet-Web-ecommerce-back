const db = require('../models/');
const { sequelize, User, ShopPath } = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_EXPIRES, JWT_SECRET_KEY } = process.env
//=====================================================Imported Zone

const fetchPath = async (req, res, next) => {
    try {
        const { username  } = req.body

        const data = await ShopPath.findAll({attributes: ['shopPath']});
        !data ? res.status(400).json({ message: 'No Path Data' }) : null;

        console.log(data);
        const payload = JSON.parse(JSON.stringify(data));

        res.status(201).json(  data );
    } catch (err) {
        next(err);
    }
}
const fetchShopData = async (req,res,next) => {
    try {
        const {shopPath} = req.params;
        // console.log(shopName);
        const data = await ShopPath.findOne({
            where:{shopPath},
            include:User
            });
        res.status(200).json(data)
    } catch (error) {
        
    }
}
const fetchCategoryData = async (req,res,next) => {
    try {
        const {shopId} = req.params;
        const data = await Category.findAll({
            where:{shopId},
            attributes:["categoryName","subCategory"]
            });
        res.status(200).json(data)
    } catch (error) {
        
    }
}

const fetchShopPath = async (req,res,next) => {
    try {
        console.log(data,'================================================');
        const {userId} = req.params;
        const data = await ShopPath.findAll({
            where:{userId},
            });
        res.status(200).json(data)
    } catch (error) {
        
    }
}


//=====================================================Exported Zone
module.exports = { fetchPath,fetchShopData,fetchCategoryData,fetchShopPath};
