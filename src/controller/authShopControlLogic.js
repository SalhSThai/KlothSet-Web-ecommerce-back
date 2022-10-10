const db = require('../models/');
const { sequelize, User, ShopPath ,Product,Category,ShopCarousal,UrlImage,ItemDetail} = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_EXPIRES, JWT_SECRET_KEY } = process.env
const fs = require('fs');
const cloudinary = require('../utility/cloudinary');

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
const AuthShopUploadCarousal = async (req, res, next) => {
    const { shopId} = req.params;
    try {

        if (!req.file) {
            throw new AppError('title or image is required', 400);
        }

        if (req.file) {
            uploadImage = await cloudinary.upload(req.file.path);
        }


        await ShopCarousal.create({ "urlCarousal": uploadImage, shopId: shopId })
        const data = await User.findOne({
            where:{id:shopId},
            include:[ShopPath,{model:Product,include:[{model:Category,through:{attributes:[]}},{model:UrlImage},{model:ItemDetail}]},Category,ShopCarousal]
            });
        res.status(201).json(data)
    } catch (err) {
        console.log("object");
        next(err);
    } finally {
        if (req.file) fs.unlinkSync(req.file.path)
    }
}



//=====================================================Exported Zone
module.exports = {AuthShopInfo ,AuthShopPath,AuthShopUploadCarousal};
