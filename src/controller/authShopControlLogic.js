const db = require('../models/');
const { sequelize, User, ShopPath ,Product} = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_EXPIRES, JWT_SECRET_KEY } = process.env
//=====================================================Imported Zone

//=====================================================register Zone
const AuthShopPath = async (req, res, next) => {
    try {
        const {userId} = req.params;
        const data = await ShopPath.findOne({
            where:{userId},
            });

        res.status(201).json({ data })
    } catch (err) {
        next(err);
    }
}
const AuthShopInfo = async (req, res, next) => {
    try {
        const {userId} = req.params;
        const data = await User.findOne({
                where:{id:userId},
                include:[ShopPath,{model:Product}]
                });

        res.status(201).json({ data })
    } catch (err) {
        next(err);
    }
}


//=====================================================Exported Zone
module.exports = {AuthShopInfo ,AuthShopPath};
