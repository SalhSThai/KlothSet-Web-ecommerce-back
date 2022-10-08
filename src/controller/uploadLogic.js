const db = require('../models/');
const { sequelize, User, UrlImage } = require('../models/index');
const cloudinary = require('../utility/cloudinary');
const AppError = require('../utility/appError');
const fs = require('fs')
//=====================================================Imported Zone

//=====================================================register Zone
const createProduct = async (req, res, next) => {
    const {} = req.body;
    try {
        
        if (!req.file) {
            throw new AppError('title or image is required', 400);
        }
        
        const data = { productId: req.body.productId };
        if (req.file) {
            data.image = await cloudinary.upload(req.file.path);
        }


        await UrlImage.create({"urlImage":data.image,productId: req.body.productId })
        res.status(201).json({ "status": data })
    } catch (err) {
        console.log("object");
        next(err);
    } finally{
        if(req.file) fs.unlinkSync(req.file.path)
    }
}

const putpicture = async (req, res, next) => {
    const {} = req.body;
    try {
        
        if (!req.file) {
            throw new AppError('title or image is required', 400);
        }
        
        const data = { productId: req.body.productId };
        if (req.file) {
            data.image = await cloudinary.upload(req.file.path);
        }


        await UrlImage.create({"urlImage":data.image,productId: req.body.productId })
        res.status(201).json({ "status": data })
    } catch (err) {
        console.log("object");
        next(err);
    } finally{
        if(req.file) fs.unlinkSync(req.file.path)
    }
}
//=====================================================Exported Zone
module.exports = { putpicture ,createProduct};
