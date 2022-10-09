const db = require('../models/');
const { sequelize, User, ShopPath ,Product,Category,ShopCarousal,UrlImage,ItemDetail} = require('../models/index');
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
                include:[ShopPath,{model:Product,include:[{model:Category,through:{attributes:[]}},{model:UrlImage},{model:ItemDetail}]},Category,ShopCarousal]
                });

        res.status(201).json( data )
    } catch (err) {
        next(err);
    }
}


//=====================================================Exported Zone
module.exports = {AuthShopInfo ,AuthShopPath};
